import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    width: 650,
    margin: 'auto'
  },
});

export default function SimpleTable({data,headers,handleOnEdit}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          {(headers) && (headers.map((row,index) => (
            <TableCell key={index} align="center">{row}</TableCell>
          )))}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {(data) && (data.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.file_name}</TableCell>
              <TableCell align="center">{(row.processed && row.processed !== 'false') ? 'true' : 'false'}</TableCell>
              <TableCell align="center">{row.image}</TableCell>
              <TableCell align="center">{row.views}</TableCell>
              <TableCell align="center">
                <Button variant="contained" onClick={() => handleOnEdit(row)}>Editar</Button>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}