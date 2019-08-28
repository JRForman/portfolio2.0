import React, { Component } from 'react';
import classes from './Card.module.css';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { cardActive: false };
		this.onCardClickHandler = this.onCardClickHandler.bind(this);
	}


	onCardClickHandler = () => {
		this.setState(state => ({
			cardActive: !state.cardActive
		}));
	};
	

	render() {
		
		try {
			var CardImage = require(`../../assets/${this.props.image}`);
		} catch (e) {
			CardImage = 'https://via.placeholder.com/150';
		}
		var sheight;
		if (window.innerWidth>729){
			sheight=window.innerHeight-80;
		}else{
			sheight=window.innerHeight-120;
		}
		var style = {
			height: this.state.cardActive?sheight:"300px"
			// height: this.state.cardActive?window.innerWidth?729?window.innerHeight-80:window.innerHeight-120:"300px"
		}
		const techs = this.props.technologies;
		if (this.props.name) {
			return (
				<div
					className={
						this.state.cardActive
							? classes.CardActive
							: classes.Card
					}
					style={style}
					onClick={this.onCardClickHandler}
					title={
						this.state.cardActive
							? 'Click anywhere on card to dismiss'
							: ''
					}
				>
					<h2> {this.props.name} </h2>
					<div>
						{techs.map(tech => (
							<h4 className={classes.techTags}>{tech}</h4>
						))}
					</div>
					<div className={classes.description}>
						<p>{this.props.description}</p>
					</div>
					<br />
					<div
						className={[
							classes.buttonContainer,
							classes.description
						].join(' ')}
					>
						<a
							href={this.props.github}
							target='_blank'
							className={
								this.props.github
									? [classes.codeButton, classes.button].join(
											' '
									)
									: classes.hidden
							}
						>
							Code{' '}
						</a>
						<a
							href={this.props.deployment}
							target='_blank'
							className={
								this.props.deployment
									? [
											classes.deploymentButton,
											classes.button
									].join(' ')
									: classes.hidden
							}
						>
							Deployment{' '}
						</a>
					</div>

					<img
						src={CardImage}
						alt={[this.props.name, 'Image'].join(' ')}
					/>
				</div>
			);
		} else {
			return <div />;
		}
	}
	
}

export default Card;
