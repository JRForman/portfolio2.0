import React, { Component } from 'react';
// import './App.css';
import classes from './App.css';
import Projects from './containers/Projects/Projects';
import NavBar from './components/Navigation/NavBar/NavBar';
import LandingBox from './components/LandingBox/LandingBox';
import AboutMe from './components/AboutMe/AboutMe';
import Headline from './components/Navigation/NavBar/Headline/Headline';
import Solutions from './components/Solutions/Solutions';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Headline />
				<NavBar />
				<Switch>
					{/* <Route path='/' exact component={LandingBox} /> */}
					<Route path='/Projects' component={Projects} />
					<Route path='/AboutMe' component={AboutMe} />
					<Route path='/Solutions' component={Solutions} />
					<Route component={LandingBox} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
