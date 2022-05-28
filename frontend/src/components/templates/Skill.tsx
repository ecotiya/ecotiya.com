/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';

import ViewTitle from '../molecules/ViewTitle';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface Column {
  id: 'skillName' | 'experienceYm';
  label: string;
  minWidth?: number;
  align?: 'right';
  isExperienceYm?: boolean;
}

const columns: Column[] = [
  { id: 'skillName', label: 'スキル名称', minWidth: 170 },
  {
    id: 'experienceYm',
    label: '経験年数',
    minWidth: 100,
    isExperienceYm: true,
  },
];

interface Data {
  skillName: string;
  experienceYm: number;
}

function createData(skillName: string, experienceYm: number): Data {
  return { skillName, experienceYm };
}

const rows = [
  createData('Java', 4.0),
  createData('VB.NET', 2.0),
  createData('PHP', 0.5),
  createData('C#', 0.5),
  createData('PowerShell', 0.5),
  createData('Perl', 0.5),
];

export default function Skill() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section id="skill">
      <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
        <Card>
          <CardContent>
            <ViewTitle title="【スキルセット】" subtitle="" />
            <Grid container spacing={1}>
              {/* Backendテーブル =============================================================== START */}
              <Grid item lg={4} md={6} xs={12}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Paper sx={{ width: '100%' }}>
                    <Typography
                      sx={{ flex: '1 1 100%' }}
                      variant="h6"
                      id="tableTitle"
                      component="div"
                    >
                      Backend
                    </Typography>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </StyledTableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                            )
                            .map((row) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.skillName}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];

                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.isExperienceYm &&
                                      typeof value === 'number' ? (
                                        <Rating
                                          name="text-feedback"
                                          value={value}
                                          readOnly
                                          precision={0.5}
                                          emptyIcon={
                                            <StarIcon
                                              style={{ opacity: 0.55 }}
                                              fontSize="inherit"
                                            />
                                          }
                                        />
                                      ) : (
                                        value
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            ))}
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
                </Box>
              </Grid>
              {/* Frontendテーブル =============================================================== START */}
              <Grid item lg={4} md={6} xs={12}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Paper sx={{ width: '100%' }}>
                    <Typography
                      sx={{ flex: '1 1 100%' }}
                      variant="h6"
                      id="tableTitle"
                      component="div"
                    >
                      Frontend
                    </Typography>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </StyledTableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                            )
                            .map((row) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.skillName}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];

                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.isExperienceYm &&
                                      typeof value === 'number' ? (
                                        <Rating
                                          name="text-feedback"
                                          value={value}
                                          readOnly
                                          precision={0.5}
                                          emptyIcon={
                                            <StarIcon
                                              style={{ opacity: 0.55 }}
                                              fontSize="inherit"
                                            />
                                          }
                                        />
                                      ) : (
                                        value
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            ))}
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
                </Box>
              </Grid>
              {/* DevOpsテーブル =============================================================== START */}
              <Grid item lg={4} md={6} xs={12}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Paper sx={{ width: '100%' }}>
                    <Typography
                      sx={{ flex: '1 1 100%' }}
                      variant="h6"
                      id="tableTitle"
                      component="div"
                    >
                      DevOps
                    </Typography>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </StyledTableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                            )
                            .map((row) => (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.skillName}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];

                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.isExperienceYm &&
                                      typeof value === 'number' ? (
                                        <Rating
                                          name="text-feedback"
                                          value={value}
                                          readOnly
                                          precision={0.5}
                                          emptyIcon={
                                            <StarIcon
                                              style={{ opacity: 0.55 }}
                                              fontSize="inherit"
                                            />
                                          }
                                        />
                                      ) : (
                                        value
                                      )}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            ))}
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
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
