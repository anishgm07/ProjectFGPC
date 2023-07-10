import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import logo from './Images/logo/main_logo.png';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
          <Navbar />
        </header>
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
