import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar/Navbar';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import Footer from './components/Footer';
import './styles/App.css';
import Sermons from './pages/Sermons';
import GalleryPage from './pages/GalleryPage';
import LiveStream from './pages/LiveStream';
import Events from './pages/Events';
import ScrollTop from '../src/components/ScrollTop';

const App: React.FC = () => {

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
        </header>
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
