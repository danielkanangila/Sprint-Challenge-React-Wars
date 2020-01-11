import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40%'
        },
        [theme.breakpoints.up('md')]: {
            width: '33%'
        },
        display: 'flex',
        flexDirection: 'column',
        marginRight: 20,
        marginBottom: 20,
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
    }
}));

const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const PeopleCard = props => {
    const classes = useStyles();
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = props || {};

    return(
        <Card className={classes.card}>
            <AvatarWrapper>
                <Avatar className={classes.avatar} src="/broken-img.jpg" />
                <Typography component="h2">{name}</Typography>
            </AvatarWrapper>
        </Card>
    )
}

export default PeopleCard;