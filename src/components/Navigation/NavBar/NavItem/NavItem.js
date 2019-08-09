import React from 'react';

import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
	return (
		<NavLink
			className={classes.NavItem}
			to={props.link}
			exact={props.exact}
			activeClassName={classes.active}
		>
			{props.children}
		</NavLink>
	);
};

export default NavItem;
