import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { SavedContext } from "./SavedContext";
import { useLocation } from "react-router-dom";

const columns = [
  { id: "date", label: "Date", minWidth: 170 },
  { id: "amount", label: "Amount", minWidth: 170 },
  { id: "catItem", label: "Category", minWidth: 170 },
  { id: "accItem", label: "Account", minWidth: 170 },
  { id: "note", label: "Note", minWidth: 170 },
];

const Tab1 = (clickTab) => {
  const location = useLocation();
  const path = location.pathname;
  const [dataArr] = useContext(SavedContext);
  const [showBtns] = useContext(SavedContext);
  const [isIn, setIsIn] = useState(true);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    const i = dataArr.filter((data) => data.isIncome == true);
    setIncomeData(i);

    const j = dataArr.filter((data) => data.isIncome == false);
    setExpenseData(j);
  }, [dataArr]);

  const [checkPath, setCheckPath] = useState(true);
  useEffect(() => {
    if (path !== "/") {
      setCheckPath(true);
    }
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  function createData(date, amount, category, account, note) {
    return { date, amount, category, account, note };
  }

  const rows = [createData(dataArr)];
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {clickTab && dataArr == "" ? (
        <div>No data</div>
      ) : (
        <div className="flex flex-col mx-5">
          {
            <div className="flex flex-row mt-10 mb-1 gap-8 content-center">
              <button
                className="rounded-lg text-xl px-5 py-2 bg-pink-300"
                onClick={() => {
                  setIsIn(true);
                }}
              >
                In
              </button>
              <button
                className="rounded-lg text-xl px-5 py-2 bg-pink-300"
                onClick={() => {
                  setIsIn(false);
                }}
              >
                Ex
              </button>
            </div>
          }

          <div className="bg-red-300 px-4 py-2">
            {isIn ? (
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {incomeData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            ) : (
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {expenseData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tab1;
