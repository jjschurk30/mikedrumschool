import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeachersPage from './pages/TeachersPage';
import RatesPage from './pages/RatesPage';
import ContactPage from './pages/ContactPage';
import CherokeeImg from './components/CherokeeImg';



class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        title: 'Cherokee Street Drum School',
        headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Teachers', path: '/teachers' },
        { title: 'Rates', path: '/rates' },
        { title: 'Contact', path: '/contact' }
        ],

        home: {
        title: 'Cherokee Street Drum School',
        subTitle: 'Teaching drummers of all ages since 2020',
        text: ''
        },

           about: {
                  title: 'About Us'
                  },

            teachers: {
                           title: 'Meet Our Teachers'
                           },
             rates: {
                            title: 'Rates',
                            },
              contact: {
                             title: 'Contact Us'
                             },
    }
    }

  render() {
  return(
    <Router>
<Container className = "p-0" fluid = {true} >


<Navbar className="navbar navbar-expand-sm navbar-dark" expand="lg" >
    <Navbar.Brand>Cherokee Street Drum School</Navbar.Brand>

    <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />
    <Navbar.Collapse id = "navbar-toggle"  >

    <Nav className = "ml-auto"  >
    <Link className = "nav-link" to="/">Home</Link>
    <Link className = "nav-link" to="about">About</Link>
    <Link className = "nav-link" to="teachers">Teachers</Link>
    <Link className = "nav-link" to="rates">Rates</Link>
    <Link className = "nav-link" to="contact">Contact</Link>


    </Nav>

    </Navbar.Collapse>
</Navbar>
<CherokeeImg />


<Route path = "/" exact render = {() => <HomePage title = {this.state.home.title}
subTitle = {this.state.home.subTitle} text = {this.state.home.text} />} />

<Route path = "/about" render = {() => <AboutPage title = {this.state.about.title} />} />

<Route path = "/teachers" render = {() => <TeachersPage title = {this.state.teachers.title} />} />

<Route path = "/rates" render = {() => <RatesPage title = {this.state.rates.title} />} />

<Route path = "/contact" render = {() => <ContactPage title = {this.state.contact.title} />} />



</Container>


    </Router>
  );
}
}

export default App;
