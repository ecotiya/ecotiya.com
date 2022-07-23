import * as React from 'react';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SkillTableDefModal from './SkillTableDefModal';
import { RatingSmile, RatingStar } from '../atoms/index';
import { Skills, SectionComments } from '../../interface/CommonInterface';

type SkillTableProps = {
  tabletitle: string;
  table: Skills[];
  skillDefTable: SectionComments[];
};

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
  id: 'skillName' | 'category' | 'skillLevel' | 'experienceYm';
  label: string;
  minWidth?: number;
  align?: 'right';
  isSkillLevel?: boolean;
  isExperienceYm?: boolean;
}

const columns: Column[] = [
  { id: 'skillName', label: '名称', minWidth: 100 },
  { id: 'category', label: 'カテゴリ', minWidth: 100 },
  {
    id: 'skillLevel',
    label: 'レベル',
    minWidth: 100,
    isSkillLevel: true,
  },
  {
    id: 'experienceYm',
    label: '経験年数',
    minWidth: 100,
    isExperienceYm: true,
  },
];

const targetRating = (value: number, isSkillLevel: boolean | undefined) => {
  if (isSkillLevel) {
    return <RatingSmile value={value} />;
  }

  return <RatingStar value={value} />;
};

const SkillTable = (props: SkillTableProps) => {
  const { tabletitle, table, skillDefTable } = props;

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
    <Grid item lg={4} md={6} xs={12}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Paper sx={{ width: '100%' }}>
          <Grid
            container
            style={{ padding: '5px', margin: '5px' }}
            direction="row"
            justifyContent="space-between"
          >
            <Grid item xs>
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                {tabletitle}
              </Typography>
            </Grid>
            <Grid item xs>
              <SkillTableDefModal skillDefTable={skillDefTable} />
            </Grid>
          </Grid>
          <TableContainer sx={{ minHeight: 600, maxHeight: 600 }}>
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
                {table
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                          <TableCell key={column.id} align={column.align}>
                            {typeof value === 'number'
                              ? targetRating(value, column.isSkillLevel)
                              : value}
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
            count={table.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Grid>
  );
};

export default SkillTable;
