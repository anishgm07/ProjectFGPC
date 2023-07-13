import React from 'react';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
