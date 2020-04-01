import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Content from '../components/Content';
import MikeImg from '../components/MikeImg';


function TeachersPage(props) {

return(
<div>

<Hero title = {props.title} />




<Content>
<h1 className = "display-4 font-weight-normal">Mike Schurk</h1>
<MikeImg />




<p>
Mike Schurk is a very musically diverse and well-studied drummer/teacher from the St. Louis area.
A native of St. Louis, he began his formal studies at CBC High School where he was apart of the Jazz, Concert and
Percussion Ensembles. While in school he also studied privately with Steve Bunck for three years at Drum Headquarters.
After high school he attended Webster University and Meramec Community College and studied privately with St. Louis
jazz icon Kevin Gianino for four years. His love for studio drumming and overall search for more musical knowledge
brought him to Los Angeles where he graduated from the LA Music Academy. While at LAMA he studied with world renowned
musicians such as Ralph Humphrey, Mike Shapiro, Joe Porcaro, Richie Gajate Garcia, Aaron Serfaty and Tony Inzalaco
among others.</p>

 <p>Mike has been an in demand performer throughout the St. Louis area for the past ten years. His diversity
has let him play all styles of music from jazz and classical to pop and latin. He currently plays drums for Americana
musician Beth Bombara and rock group Essential Knots. He has performed in local venues such as
The Pageant, Blueberry Hill, Cicero’s, Off Broadway, Old Rock House and The Gramophone among others. In addition to
playing live shows Mike has recorded five full-length CD’s and numerous demos and EP’s. He has recorded in studios
such as Phat Buddha, R&R Music Labs, Bossman Studios and Webster University Studio.</p>

<p>
Besides playing the drums Mike is a very active drum instructor in St. Louis. He has been teaching for over eight years
and always keeps a student base of 25 to 30 students at all times. He has taught for Dale’s Music, Dave Simon’s Rock
School and Kirkwood Music Center. He currently only teaches here at the Cherokee Street Drum School, which he
co-founded with his brother John.


</p>









</Content>








</div>
);
}

export default TeachersPage;