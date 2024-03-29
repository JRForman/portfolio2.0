import React, { Component } from 'react';
import classes from './AboutMe.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import family from '../../assets/family.JPG';
class AboutMe extends Component {
	render() {
		return (
			<div className={classes.AboutMe}>
				<div className={classes.imageContainer}>
					<img key='family' src={family} alt='Forman Family'></img>
				</div>
				<main>
					<article>
						<h3>What I Can Do For You</h3>

						<p>
							When it comes to work and projects alike, I excel at
							learning and then applying solutions. Any company I
							work for can count on my ability to adapt. They will
							know I am someone who thrives in stressful,
							challenging environments while understanding no one
							knows all of the answers.
						</p>
					</article>
					<article>
						<h3>My Story</h3>
						<p>
							I have always loved seeing bits of code on a screen
							grow to something I could play with. Starting on a
							RadioShack Tandy TRS-80 at 10 years old, I learned
							how to program in BASIC. This led to a lifelong
							passion to learn systems, how they work, and how to
							make them more efficient.
						</p>

						<p>
							While waiting tables to earn money for college, I
							was pushed to pursue a pre-med track. Off to college
							I went as an "undecided, pre-med major." I enjoyed
							the sciences and the rigors of the program, but I
							wasn't truely happy. I missed computers and the
							problem solving unique to engineering.
						</p>
						<p>
							Fast forward through a few jobs and minor careers
							later, and I have found the I have used programming
							in every step of the way. From creating programs in
							C# that take an assembly of parts and create
							drawing sheets, to programming LISP commands to make
							drawing kitchens faster in AutoCAD, to calculating
							inventory needs based on projected projects. I have
							finally made my way back to coding, and love every
							second of it.
						</p>
					</article>
				</main>
			</div>
		);
	}
}

export default AboutMe;
