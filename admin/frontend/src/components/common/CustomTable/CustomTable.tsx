// @ts-nocheck
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const CustomTable = ({ columns, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (orderBy === "") {
      return 0;
    }
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <TextField
        label="Search"
        value={searchValue}
        onChange={handleSearchChange}
        sx={{ marginBottom: "16px" }}
      />
      <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
        <Table aria-label="dynamic table" sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={orderBy === column.field ? order : "asc"}
                    onClick={() => handleSort(column.field)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) =>
                  column?.component ? (
                    <TableCell key={column.field}>
                      {column.component(row)}
                    </TableCell>
                  ) : (
                    <TableCell key={column.field}>
                      {row[column.field]}
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>
    </div>
  );
};

export default CustomTable;
