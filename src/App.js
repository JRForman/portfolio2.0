import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Projects from './containers/Projects/Projects';
import NavBar from './components/Navigation/NavBar/NavBar';
import LandingBox from './components/LandingBox/LandingBox';
import AboutMe from './components/AboutMe/AboutMe';

import { Route, Switch, withRouter } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
	render() {
		// var exitOn = this.props.location.pathname === '/' ? true : false;

		return (
			<div className={classes.App}>
				<NavBar />
				<Route
					render={({ location }) => (
						// <TransitionGroup exit={exitOn}>
						// 	<CSSTransition
						// 		key={location.key}
						// 		timeout={10000}
						// 		classNames={classes.App}
						// 	>
								<Switch location={location}>
									<Route
										path='/'
										exact
										component={LandingBox}
									/>
									<Route
										path='/Projects'
										component={Projects}
									/>
									<Route
										path='/AboutMe'
										component={AboutMe}
									/>
								</Switch>
						// 	</CSSTransition>
						// </TransitionGroup>
					)}
				/>
			</div>
		);
	}
}

export default withRouter(App);
