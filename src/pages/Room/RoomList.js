import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

function createData(name,Capacity,Staff,Children) {
  return { name,Capacity,Staff,Children };
}

const rows = [
  createData('New Room','9 eg','Nada Alaa', 'Jana Alaa'),
  createData('New Room','9 eg','Nada Alaa', 'Jana Alaa'),
  createData('New Room','9 eg','Nada Alaa', 'Jana Alaa'),
  createData('New Room','9 eg','Nada Alaa', 'Jana Alaa'),
  createData('New Room','9 eg','Nada Alaa', 'Jana Alaa'),
];

export default function RoomList() {
  // Calculate total price
  const total = rows.reduce((acc, row) => acc + row.calories, 0);

  return (
    <TableContainer className='table-style table table-hover' sx={{ direction: "ltr" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='table-head-stayl'>
          <TableRow>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Name</TableCell>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Capacity</TableCell>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Assign Staff</TableCell>
            
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Assign Children</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize:"18px"}} align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  sx={{fontSize:"18px"}} align="left">{row.Capacity}</TableCell>
              <TableCell sx={{fontSize:"18px"}} align="left">{row.Staff}</TableCell>
             
              <TableCell sx={{fontSize:"18px"}} align="left">{row.Children}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </TableContainer>
  );
}
