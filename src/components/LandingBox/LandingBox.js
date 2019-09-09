import React, { Component } from 'react';

import classes from './LandingBox.module.css';
// import pageClass from '../../App.css'
import background from '../../assets/coverImage.jpg';
import NavItem from '../Navigation/NavBar/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas);

class LandingBox extends Component {
	constructor(props) {
		super(props);
		this.state = { imageIsReady: false };
	}
	componentDidMount() {
		const img = new Image();
		img.src = background;
		img.onload = () => {
			this.setState({ imageIsReady: true });
		};
	}

	render() {
		const { imageIsReady } = this.state;
		if (!imageIsReady) {
			return <div>Loading...............</div>;
		} else {
			return (
				<div className={classes.LandingBox}>
					<h1>Hi. I'm Jason and I like to create solutions.</h1>
					<img src={background} alt={'me'} />
					<div className={classes.linkContainer}>
						<div className={classes.NavIcons}>
							<a
								className={classes.NavIcon}
								href='https://www.linkedin.com/in/jasonrforman'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon
									icon={['fab', 'linkedin']}
									size='lg'
									className='NavIcon'
								/>
							</a>
							<a
								className={classes.NavIcon}
								href='https://github.com/JRForman'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon
									icon={['fab', 'github']}
									size='lg'
									className='NavIcon'
								/>
							</a>
							<a
								className={classes.NavIcon}
								href='mailto:contact@jrforman.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon
									icon={['fas', 'envelope']}
									size='lg'
									className='NavIcon'
								/>
							</a>
						</div>
						<NavItem link='/projects' exact>
							Projects
						</NavItem>
						<NavItem link='/aboutme'>About Me</NavItem>
						<NavItem link='/other'>Other Projects</NavItem>
					</div>
				</div>
			);
		}
	}
}

export default LandingBox;
