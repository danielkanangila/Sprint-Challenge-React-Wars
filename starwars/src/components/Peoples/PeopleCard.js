import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import CharacteristicsTable from './CharacteristicsTable';

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '40%'
        },
        [theme.breakpoints.up('md')]: {
            width: '30%'
        },
        display: 'flex',
        flexDirection: 'column',
        marginRight: 20,
        marginBottom: 20,
        paddingTop:  20,
        paddingBottom: 20
    },
    avatar: {
        width: 100,
        height: 100,
    },
    name: {
        fontSize: '1.3rem',
        marginTop: 15,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    title: {
        paddingTop: '15px',
        paddingBottom: '15px',
        textTransform: 'uppercase',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        letterSpacing: '1.3px',
    }   
}));

const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const DetailsWrapper = styled.div`
    padding: 0 20px;
`;

const PeopleCard = props => {
    const classes = useStyles();
    const { name } = props || {};

    return(
        <Card className={classes.card}>
            <AvatarWrapper>
                <Avatar className={classes.avatar} src="/broken-img.jpg" />
                <Typography className={classes.name} component="h2">{name}</Typography>
            </AvatarWrapper>
            <Divider />
            <DetailsWrapper>
                <Typography className={classes.title} component="h3">Characteristics</Typography>
                <CharacteristicsTable {...props} />
            </DetailsWrapper>
        </Card>
    )
}

export default PeopleCard;