import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import ReactPlayer from "react-player";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function HomePage(props) {

return(
   <div>
<Hero title = {props.title} subTitle = {props.subTitle} text = {props.text} />


   <Container fluid = {true}>
<Row className ="justify-content-center">
<Col sm= {7}>
<div class = "video">


 <ReactPlayer url='https://www.youtube.com/watch?v=oURKGTQ7m0w' />


</div>
</Col>
</Row>

</Container>
 </div>


);
}

export default HomePage;