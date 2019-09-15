import React, { Component } from 'react';

import classes from './NavBar.module.css';

import NavItem from './NavItem/NavItem';
// import Headline from './Headline/Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas);

class NavBar extends Component {
	render() {
		return (
			<div id='NavBar'>
				<ul className={classes.NavBar}>
					
					<div className={classes.NavLinkContainer}>
						<NavItem link='/projects' exact>
							Projects
						</NavItem>
						<NavItem link='/aboutme'>About Me</NavItem>
						<NavItem link='/other'>Other Projects</NavItem>
					</div>
					<div className={classes.NavIcons}>
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
								className='NavIcon'
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
								className='NavIcon'
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
								className='NavIcon'
							/>
						</a>
					</div>
				</ul>
				<div className={classes.spacer} />
			</div>
		);
	}
}
export default NavBar;
