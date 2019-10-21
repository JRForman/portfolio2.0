import React from 'react';
import classes from './Solutions.Module.css';
import constructionIMG from '../../assets/construction.gif';

const Solutions = () => {
	return (
		<div className={classes.Solutions}>
			<img
				style={{
					maxWidth: '100vw',
					maxHeight: 'calc(100vh - 50px)',
					display: 'block',
					margin: '45px auto'
				}}
				className={classes.construction}
				alt='Under Construction'
				src={constructionIMG}
			></img>
		</div>
	);
};

export default Solutions;
