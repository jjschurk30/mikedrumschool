import React from 'react';
import '../App.css';
import Content from '../components/Content';
import Hero from '../components/Hero';


function ContactPage(props) {

return(
  <div>
<Hero title = {props.title}  />

<Content>
<h1 className ="contact">You can contact us at cherokeedrumschool@yahoo.com to set up a lesson. Please leave your name and number in the
message so we can get back to you. Happy Drumming!</h1>

</Content>
</div>



);
}

export default ContactPage;