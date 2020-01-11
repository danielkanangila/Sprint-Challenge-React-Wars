import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    logo: {
        fontFamily: 'Alfa Slab One',
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontWeight: 900,
        fontSize: '1.5rem'
    },
    span: {
        fontFamily: 'Alfa Slab One',
        fontWeight: 900,
        fontSize: '1.5rem',
        color: '#BA112E',
    }
}))



const Logo  = () => {
    const classes = useStyles();
    return(
        <Typography className={ classes.logo } component="h6" >
            React
            <Typography className={classes.span} component="span">Wars</Typography>
        </Typography>
    );
}

export default Logo;