import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import DrumImg from '../components/DrumImg';
import Content from '../components/Content';

function RatesPage(props) {

return(
  <div>
<Hero title = {props.title}  />

<Content>
<DrumImg />
<h2>Our rates are $60 for a 40 minute individual lesson in studio, $100 for an hour session.
Group lessons last 45 minutes and cost $50 per student</h2>

</Content>
</div>

);
}

export default RatesPage;