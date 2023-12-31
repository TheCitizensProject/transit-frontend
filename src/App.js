import './App.css';
import React from 'react'
import Trains from './components/Trains';
import Tram from './components/Tram';
import Ferry from './components/Ferry';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT
  return (
    <React.Fragment>
      <Container style={{'marginTop': '50px'}}>
        <Row>
          <Col sm={12} md={12} lg={4}><Trains serverEndpoint={serverEndpoint}/></Col>
          <Col sm={12} md={12} lg={4}><Ferry serverEndpoint={serverEndpoint}/></Col>
          <Col sm={12} md={12} lg={4}><Tram serverEndpoint={serverEndpoint}/></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;

{/*
https://citizen-proj-mta-api-backend.onrender.com
*/}