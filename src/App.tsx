import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './styles/App.css';
import Sermons from './pages/Sermons';
import GalleryPage from './pages/GalleryPage';
import LiveStream from './pages/LiveStream';
import Events from './pages/Events';
import ScrollTop from '../src/components/ScrollTop';
import Modal from '@mui/base/Modal';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';

const App: React.FC = () => {

  const Backdrop = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
  >((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'MuiBackdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });

  const blue = {
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
  };
  
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

    const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = (theme: Theme) => ({
    width: 400,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
  });

  const TriggerButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    border-radius: 12px;
    padding: 6px 12px;
    line-height: 1.5;
    background: transparent;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[100] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:focus-visible {
      border-color: ${blue[400]};
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
    `,
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {

    const scrollFunction = () => {
      const header = document.getElementById('header');
      if (header) {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          header.style.fontSize = '12px';
        } else {
          header.style.fontSize = '16px';
        }
      }
    };

    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };

  }, []);

  return (
    <Router>
      <div className="container">
        <header className="header" id='header'>
          <Navbar />
          <TriggerButton type="button" onClick={handleOpen}>
            Login
          </TriggerButton>
        </header>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          slots={{ backdrop: StyledBackdrop }}
        >
          <Box sx={style}>
          <h2 id="unstyled-modal-title">LOGIN</h2>
          <p id="unstyled-modal-description">LOGIN POPUP</p>
        </Box>
      </StyledModal>
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/sermons" component={Sermons} />
            <Route path="/live" component={LiveStream} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
        <ScrollTop window={window} /> 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
