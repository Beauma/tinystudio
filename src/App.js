import React from 'react';
import { Header } from './components/Header.js'
import AccordianNav from './components/AccordianNav.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Header />
        </Row>
        <Row>
        <AccordianNav />
        </Row>
      </Container>
    </div>
  );
}

export default App;
