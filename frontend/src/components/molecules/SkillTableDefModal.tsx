import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { RatingSmile } from '../atoms/index';
import { SectionComments } from '../../interface/CommonInterface';

type SkillTableDefModalProps = {
  skillDefTable: SectionComments[];
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
  id: 'sectionCommentLine' | 'sectionComment';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: Column[] = [
  { id: 'sectionCommentLine', label: 'レベル', minWidth: 100 },
  { id: 'sectionComment', label: '説明', minWidth: 170 },
];

const SkillTableDefModal = (props: SkillTableDefModalProps) => {
  const { skillDefTable } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        レベル定義
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              レベル定義
            </Typography>
            <TableContainer sx={{ maxHeight: 600 }}>
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
                  {skillDefTable.map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.sectionCommentLine}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {typeof value === 'number' ? (
                              <RatingSmile value={value} />
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SkillTableDefModal;
