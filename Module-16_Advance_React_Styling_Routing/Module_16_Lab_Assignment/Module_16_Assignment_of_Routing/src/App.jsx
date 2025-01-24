/*   

Task 1: 
    • Set up a basic React Router with two routes: one for a Home page and one for 
    an About page. Display the appropriate content based on the URL. 
Task 2: 
    • Create a navigation bar using React Router’s Link component that allows users to 
    switch between the Home, About, and Contact pages.  

*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

// Styled Components
const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const NavBar = styled.nav`
  background-color: black;
  padding: 10px;
  color: white;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <NavBar>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavList>
        </NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
