import React, { Component } from 'react';
import classes from './AboutMe.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import tandy from '../../assets/AboutMeSlideShow/tandybasicbook.jpg';
import jason from '../../assets/AboutMeSlideShow/DSC_0112-bz.jpg';

class AboutMe extends Component {
	render() {
		return (
			<div className={classes.AboutMe}>
				<Carousel
					axis={"horizontal"}
					centerMode={true}
					autoPlay={true}
					infiniteLoop={true}
					showThumbs={false}
					showArrows={true}
					showIndicators={true}
					emulateTouch={true}
					className={classes.imageContainer}
				>
					<div>
						<img key='tandybook' src={tandy} alt='Tandy Book'></img>
					</div>
					<div>
						<img key='jason' src={jason} alt='Jason and Son'></img>
					</div>
				</Carousel>
				<h1>Coming Soon.</h1>

				{/* <p >
				I have always loved seeing bits of code on a screen grow to something I could play with. Starting on a RadioShack Tandy TRS-80 when I was 10, I learned how to program in BASIC. This led to a lifelong passion to learn systems, how they work, and how to make them more efficient. When I was 17, that changed. I was waiting tables to save money for college when I started working with (what I thought was) an actual programmer. I shared my joys of coding with him and he flat out told me I couldn’t make it in the industry. “The industry is too cut-throat and a nice kid like you won’t make it” he said. I took this discouragement to heart and went off to college as a pre-med major. I did not like it. A few jobs and minor careers later, and I have found the I have used programming in every step of the way. From creating programs in VB.net that take an assembly of parts and create drawing sheets, to programming LISP commands to make drawing kitchens faster in AutoCAD, to calculating inventory needs based on projected projects. I have finally made my way back to coding, and love every second of it.
				</p> */}
			</div>
		);
	}
}

export default AboutMe;
