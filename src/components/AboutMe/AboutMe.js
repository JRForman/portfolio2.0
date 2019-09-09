import React, { Component } from 'react';
import classes from './AboutMe.module.css';
import tandy from '../../assets/AboutMeSlideShow/tandybasicbook.jpg';
import jason from '../../assets/AboutMeSlideShow/DSC_0112-bz.jpg';

class AboutMe extends Component {
	render() {
		return (
			<div className={classes.AboutMe}>
				<div className={classes.imageContainer}>
                    <img key="tandybook" src={tandy} alt="Tandy Book" className= "slideShow"></img>
					<img key="jason" src={jason} alt="Jason and Son" className= "slideShow"></img>

				</div>

				<p >
					My heart has always been set on figuring out how things
					work. My father gave me a tool box when I was 5 years old.
					He came home to every electronic toy I owned, as well as the
					front gate, my fish tank pump, and my tricycle in pieces.
					During the 80s and early 90s PC rush, I quickly found myself
					fascinated with computers. At age 8, my parents bought an
					old, Radio Shack branded, Tandy TRS-80 that I spent
					countless hours playing on. I still remember the moment I
					first ran “Hello World” and later making a circle that you
					could resize, recolor, and move around the screen. At age
					10, my mother bought an i386 to use for work keeping medical
					records. With Windows 3.1 and MS-DOS, I spent the entire
					summer just “playing” and figuring out how it works. A few
					short years later, my parents purchased an i486 based
					computer. I continued to learn and explore. In junior high,
					I was frequently pulled out of class to help teachers with
					computers. I was asked to attend a summer program for BASIC
					computer programming using Apple IIe’s. Since I had my old
					TRS-80, I was very familiar with BASIC. I ended up being a
					teaching assistant instead of a student. The teacher asked
					me back next summer to help with their newly acquired Macs.
				</p>
			</div>
		);
	}
}

export default AboutMe;
