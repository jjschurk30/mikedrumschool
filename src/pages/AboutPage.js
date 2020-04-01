import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Content from '../components/Content';
import MikeSnareImg from '../components/MikeSnare';
import BethImg from '../components/BethImg';
import FiredogImg from '../components/FiredogImg';

function AboutPage(props) {

return(
<div>
<Hero title = {props.title} />


<Content>
<h2 className = 'welcome'>Welcome</h2>

<p>Hello, my name is Mike Schurk. I have been playing drums since 1997 and have been teaching private lessons
since 2004. I offer beginner to advanced drum lessons and can cover everything from Jazz to Rock to Rudimental
Snare Drumming. I have taught ages 3 to 72 but do recommend children being at least 8 years old before starting
private lessons.</p>

<p>Drum set and lesson materials will be provided but students will need to bring their own drum sticks.</p>


<MikeSnareImg />
<h3>Mike Schurk</h3>

<BethImg />
<h3>Mike playing with the talented Americana singer/songwriter, Beth Bombara</h3>

<FiredogImg />
<h3>Mike playing with the popular local St. Louis band, Firedog</h3>
</Content>
</div>
);
}





export default AboutPage;