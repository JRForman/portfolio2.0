import React from 'react';

import classes from './Headline.module.css';
    import { NavLink } from 'react-router-dom';



const Headline = ()=> {
    return (
        <NavLink
			to="/"
			exact		>
            <div className={classes.Headline}></div>

        </NavLink>
    )
}

export default Headline;