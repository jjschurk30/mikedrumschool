import React from 'react';
import '../App.css';
import Content from '../components/Content';
import Hero from '../components/Hero';



function ContactPage(props) {

return(
  <div>

<Content>
<Hero title = {props.title}  />


<h4>You can contact us at cherokeedrumschool@yahoo.com to set up a lesson. Please leave your name
and number in themessage so we can get back to you. Happy Drumming!</h4>

</Content>

</div>



);
}

export default ContactPage;