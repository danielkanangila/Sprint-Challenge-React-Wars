import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      width: '100%',
    },
  });

const CharacteristicsTable = props => {
    const classes = useStyles();
    
    const createData = () => {
        return [
            {
                name: 'Birth Year',
                value: props?.birth_year,
            },
            {
                name: 'Gender',
                value: props?.gender,
            },
            {
                name: 'Height',
                value: props?.height,
            },
            {
                name: 'Mass',
                value: props?.mass,
            },
            {
                name: 'Hair Color',
                value: props?.hair_color,
            },
            {
                name: 'Skin Color',
                value: props?.skin_color,
            },
            {
                name: 'Eye Color',
                value: props?.eye_color,
            },
        ]
    }

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createData()?.map((characteristic, index) => (
                        <TableRow key={index}>
                            <TableCell>{characteristic.name}</TableCell>
                            <TableCell>{characteristic.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CharacteristicsTable;