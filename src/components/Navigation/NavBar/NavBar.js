import React, { Component } from 'react';

import classes from './NavBar.module.css';

import NavItem from './NavItem/NavItem';
// import Headline from './Headline/Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// import {keyframes} from 'styled-components';
 
library.add(fab, fas);

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = { ExternalNav: false };
		this.ExternalNavButton = this.ExternalNavButton.bind(this);
	}

	ExternalNavButton() {
		const NavIconContainer = document.getElementById('NavIconContainer');
		const NavIconButton = document.getElementById('NavIconButton');
	

		if (this.state.ExternalNav === true) {
			this.setState({ ExternalNav: false });
			NavIconButton.style.background = 'inherit';
			NavIconContainer.style.transition = 'transform .5s ease-out'
			NavIconContainer.style.transform = ' translateX(60px)'
		} else {
			this.setState({ ExternalNav: true });
			NavIconContainer.style.display = 'flex';
			NavIconButton.style.background = '#153b50';
			NavIconContainer.style.transition = 'transform .5s ease-out'
			NavIconContainer.style.transform = ' translateX(0px)'
		}
	}

	render() {
		return (
			<nav id='NavBar'>
				<ul className={classes.NavBar}>
					<div className={classes.NavLinkContainer}>
						<NavItem link='/Projects' exact>
							Projects
						</NavItem>
						<NavItem link='/AboutMe'>About Me</NavItem>
						<NavItem link='/Solutions'>Solutions</NavItem>
						<button
							className={classes.NavIconButton}
							id='NavIconButton'
							onClick={this.ExternalNavButton}
						>
							<FontAwesomeIcon
								icon={['fas', 'id-card']}
								size='lg'
								className='NavIcon'
							/>
						</button>
					</div>
					<div className={classes.NavIcons} id='NavIconContainer'>
						<a
							className={classes.NavIcon}
							title='LinkedIn'
							href='https://www.linkedin.com/in/jasonrforman'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={['fab', 'linkedin']}
								size='lg'
								// className='NavIcon'
							/>
						</a>
						<a
							className={classes.NavIcon}
							title='GitHub'
							href='https://github.com/JRForman'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={['fab', 'github']}
								size='lg'
								// className={classes.NavIcon}
							/>
						</a>
						<a
							className={classes.NavIcon}
							title='Email'
							href='mailto:contact@jrforman.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={['fas', 'envelope']}
								size='lg'
								// className='NavIcon'
							/>
						</a>
					</div>
				</ul>
				<div className={classes.spacer} />
			</nav>
		);
	}
}
export default NavBar;
