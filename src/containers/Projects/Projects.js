import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import classes from './Projects.module.css';
import projects from '../../assets/Projects.json';

class Projects extends Component {
	render() {
		return (
			<div className={classes.Projects}>
				{projects.map(project => {
					return <Card {...project} key={project.name} />;
				})}
			</div>
		);
	}
}

export default Projects;
