import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Projects from './containers/Projects/Projects';
import NavBar from './components/Navigation/NavBar/NavBar';
import LandingBox from './components/LandingBox/LandingBox';
import AboutMe from './components/AboutMe/AboutMe';

import { Route, withRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Route path='/' exact component={LandingBox} />
				<Route path='/Projects' render={props=> <><NavBar/><Projects/></> } />
				<Route path='/AboutMe' render={props=> <><NavBar/><AboutMe/></> }  />
				<Route path='/Other' render={props=> <><NavBar/></> }  />

			</div>
		);
	}
}

export default withRouter(App);
