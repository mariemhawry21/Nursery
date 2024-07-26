// DataTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import AllActivity from "./AllActivity";

const rows = [
  {
    name: "Asia Ahmed",
    age: "4 Years and 7 Month",
    ageGroup: "0-3",
    food: 0,
    sleep: 0,
    diaper: 0,
    accident: 0,
    learning: 0,
    drink: 0,
  },
  {
    name: "Asia Ahmed",
    age: "4 Years and 7 Month",
    ageGroup: "0-3",
    food: 0,
    sleep: 0,
    diaper: 0,
    accident: 0,
    learning: 0,
    drink: 0,
  },
  {
    name: "Asia Ahmed",
    age: "4 Years and 7 Month",
    ageGroup: "0-3",
    food: 0,
    sleep: 0,
    diaper: 0,
    accident: 0,
    learning: 0,
    drink: 0,
  },
  {
    name: "Asia Ahmed",
    age: "4 Years and 7 Month",
    ageGroup: "0-3",
    food: 0,
    sleep: 0,
    diaper: 0,
    accident: 0,
    learning: 0,
    drink: 0,
  },
  {
    name: "Asia Ahmed",
    age: "4 Years and 7 Month",
    ageGroup: "0-3",
    food: 0,
    sleep: 0,
    diaper: 0,
    accident: 0,
    learning: 0,
    drink: 0,
  },
];

const ActivityList = () => {
  return (
    <TableContainer
      className="table-style table table-hover"
      component={Paper}
      sx={{ marginTop: "" }}
    >
      <Table>
        <TableHead className="table-head-stayl"  style={{backgroundColor:"#fff"}}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Child Name</TableCell>
            <TableCell>Age Group</TableCell>
            <TableCell style={{color: "#4CAF50"}}>Food</TableCell>
            <TableCell style={{color: "#E91E63" }}>Sleep</TableCell>
            <TableCell style={{color: "#03A9F4"}}>Diaper</TableCell>
            <TableCell style={{color: "#9C27B0"}}>Accident</TableCell>
            <TableCell style={{color: "#FFC107" }}>Learning</TableCell>
            <TableCell style={{color: "#00BCD4"}}>Drink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt={row.name}
                    src="https://tse1.mm.bing.net/th?id=OIP.6C95Th7xvMQHkD8Rjm7uEwHaE8&pid=Api&P=0&h=220"
                  />
                  <Box ml={2}>
                    <Typography variant="body1">{row.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {row.age}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#e0e0e0"
                  borderRadius="8px"
                  px={1}
                  py={0.5}
                  sx={{ color: "#000" }}
                >
                  0-3
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#4CAF50" }}>{row.food}</TableCell>
              <TableCell sx={{ color: "#E91E63" }}>{row.sleep}</TableCell>
              <TableCell sx={{ color: "#03A9F4" }}>{row.diaper}</TableCell>
              <TableCell sx={{ color: "#9C27B0" }}>{row.accident}</TableCell>
              <TableCell sx={{ color: "#FFC107" }}>{row.learning}</TableCell>
              <TableCell sx={{ color: "#00BCD4" }}>{row.drink}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActivityList;
