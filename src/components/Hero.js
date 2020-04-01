import React from 'react';
import '../App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Hero(props) {

return(
<Jumbotron className = "bg-transparent jumbotron-fluid p-0" >
<Row className = "text-center">
<Col sm = {12}>
<Container fluid = {true}>





{ props.title && <h1 className = "display-4 font-weight-bold">{props.title}</h1> }
{ props.subTitle  && <h3 className = "display-4 font-weight-light">{props.subTitle}</h3> }
{ props.text && <h3 className = " font-weight-light">{props.text}</h3> }
</Container>



</Col>
</Row>

</Jumbotron>


);
}

export default Hero;