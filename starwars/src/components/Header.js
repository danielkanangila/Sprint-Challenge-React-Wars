import React from 'react';
import styled from 'styled-components';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        zIndex: 10,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: '4px',
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
}));

const Div = styled.div`
    background-image: url('/sw-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
`

const DivFilter = styled.div`
    position: absolute;
    left:  0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 5;
`;

const H1 = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    z-index: 10
`;

const Header = props => {
    const classes = useStyles();
    return(
        <Div>
            <DivFilter></DivFilter>
            <H1>Star Wars Legends</H1>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Div>
    )
}

export default Header;