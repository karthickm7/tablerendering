import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Search from "./Search";
import TextField from "@mui/material/TextField";

const BasicTable = (props) => {
  const [searchField, setSearchField] = useState("");

  return (
    <>
      <div className="main">
        <h1>React Search</h1>
        <div className="search">

          {/* //search bar */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            onChange={(event) => setSearchField(event.target.value)}
            value={searchField}
          />
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">title&nbsp;</TableCell>
              <TableCell align="right">completed&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* filter method  */}
            {props.Data.filter((val) => {
              if (searchField === " ") {
                return true;
              } else if (
                val.title.toLowerCase().startsWith(searchField.toLowerCase())
              ) {
                return true;
              }
            })
            .map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userId}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.completed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasicTable;
