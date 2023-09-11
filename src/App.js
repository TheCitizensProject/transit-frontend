import './App.css';
import React from 'react'
import Trains from './components/Trains';
import Ferry from './components/Ferry'
import Tram from './components/Tram';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <React.Fragment>
      <Container style={{'marginTop': '50px'}}>
        <Row>
          <Col sm={12} md={12} lg={4}><Trains/></Col>
          <Col sm={12} md={12} lg={4}><Ferry/></Col>
          <Col sm={12} md={12} lg={4}><Tram/></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
