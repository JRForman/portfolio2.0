import React, { Component } from 'react';

import classes from './LandingBox.module.css';
// import pageClass from '../../App.css'
import background from '../../assets/coverImage.jpg';
import NavItem from '../Navigation/NavBar/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Loader from 'react-spinners/RingLoader';

library.add(fab, fas);

class LandingBox extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}
	componentDidMount() {
		const img = new Image();
		img.src = background;
		img.onload = () => {
			this.setState({ loading: false });
		};
	}

	render() {
	
		if (this.state.loading) {
			return (
				<div className={classes.Loader}>
					<Loader
						css={'margin: 40px auto 0 auto; padding: 20px; vertical-align: middle'}
						sizeUnit={'px'}
						size={200}
						color={'white'}
						loading={this.state.loading}
					/>
					<h1>Loading, Please Stand By.....</h1>
				</div>
			);
		} else {
			return (
				<div className={classes.LandingBox}>
					<img src={background} alt={'me'} />
					<h1>Hi. I'm Jason and I like to create solutions.</h1>
					<div className={classes.linkContainer}>
						<NavItem link='/Projects' exact>
							Projects
						</NavItem>
						<NavItem link='/AboutMe'>About Me</NavItem>
						<NavItem link='/Solutions'>Solutions</NavItem>
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
					</div>
				</div>
			);
		}
	}
}

export default LandingBox;
