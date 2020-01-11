import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        marginBottom: '30px',
        textAlign: 'left',
        padding: 20
    },
    title: {
        fontSize: '1rem',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    count: {
        fontSize: '0.9rem',
        color: 'rgba(0,0,0,0.5)'
    }
}));

const CharacterCountDisplay = props => {
    const classes = useStyles();
    const { count, currentCount } = props;

    return (
        <Card className={classes.card}>
            <Typography className={classes.title} component="h2">
                List of Star Wars Peoples
            </Typography>
            <Typography className={classes.count} component="p">
                Number of Character: {currentCount} / {count}
            </Typography>
        </Card>
    );
}

export default CharacterCountDisplay;