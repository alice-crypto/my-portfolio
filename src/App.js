import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
          <Navbar.Brand as={Link} to="/" className="font-weight-bold">
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/my-portfolio" className="nav-link">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link">
                Projets
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                À Propos
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/my-portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
