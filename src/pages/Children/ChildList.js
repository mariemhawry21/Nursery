import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

function createData(first,last,address,  Room,Children,image) {
  return { first,last,address, Room,Children,image };
}

const rows = [
  createData('Jana','Alaa','Cairo', 'Watting List','Nada Alaa',<img style={{height:"50px",width:"50px"}} src='https://www.tinyworld.biz/wp-content/uploads/2016/03/babies7.jpg'></img>),
  createData('Jana','Alaa','Cairo', 'Watting List','Nada Alaa',<img style={{height:"50px",width:"50px"}} src='https://www.tinyworld.biz/wp-content/uploads/2016/03/babies7.jpg'></img>),
  createData('Jana','Alaa','Cairo','Watting List','Nada Alaa',<img style={{height:"50px",width:"50px"}} src='https://www.tinyworld.biz/wp-content/uploads/2016/03/babies7.jpg'></img>),
  createData('Jana','Alaa','Cairo', 'Watting List','Nada Alaa',<img style={{height:"50px",width:"50px"}} src='https://www.tinyworld.biz/wp-content/uploads/2016/03/babies7.jpg'></img>),
  createData('Jana','Alaa','Cairo', 'Watting List','Nada Alaa',<img style={{height:"50px",width:"50px"}} src='https://www.tinyworld.biz/wp-content/uploads/2016/03/babies7.jpg'></img>),
];

export default function ChildList() {
  // Calculate total price
  const total = rows.reduce((acc, row) => acc + row.calories, 0);

  return (
    <TableContainer className='table-style table table-hover' sx={{ direction: "ltr" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='table-head-stayl'>
          <TableRow>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">First Name</TableCell>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Last Name</TableCell>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Address</TableCell>
            
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Assign to Room(s)</TableCell>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Assign Key Person</TableCell>
            <TableCell style={{color:"#fff"}} sx={{fontSize:"18px"}} align="left">Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize:"18px"}} align="left" component="th" scope="row">
                {row.first}
              </TableCell>
              <TableCell  sx={{fontSize:"18px"}} align="left">{row.last}</TableCell>
              <TableCell sx={{fontSize:"18px"}} align="left">{row.address}</TableCell>
             
              <TableCell sx={{fontSize:"18px"}} align="left">{row.Room}</TableCell>
              <TableCell sx={{fontSize:"18px"}} align="left">{row.Children}</TableCell>
              <TableCell sx={{fontSize:"18px"}} align="left">{row.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </TableContainer>
  );
}
