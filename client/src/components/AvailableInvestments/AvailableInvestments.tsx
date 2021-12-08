import React, { useEffect } from 'react';
import axios from 'axios';
import  { useUser } from '../UserProfile/UserProfile';
import { Box, Button, Typography, Modal } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: '600px',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  getInvestments: () => void;
}

const AvailableInvestments = ({ getInvestments }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [availableInvestments, setAvailableInvestments] = React.useState<any>();
  const [selectedInvestments, setSelectedInvestments] = React.useState<number>(0);
  const { userId } = useUser();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 100 },
    { field: 'total', headerName: 'Total', type: 'number', width: 100 },
    { field: 'paid', headerName: 'Amount Paid', type: 'number', width: 150 },
    { field: 'oustanding', headerName: 'Amount Outstanding', type: 'number', width: 200 },
    { field: 'apr', headerName: 'APR', type: 'number', width: 100 },
    { field: 'term', headerName: 'Loan Term', type: 'number', width: 100 },
  ];

  const getAvailableInvestments = async () => {
    try {
      await axios.get('http://localhost:3000/availableInvestments', {
        params: {
          userId: userId
        }
      })
      .then((data) => {
        setAvailableInvestments(data.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSelection = (e: any) => {
    setSelectedInvestments(e);
  }

  const newInvestment = async () => {
    console.log('available investments: ', availableInvestments);
    console.log('selected investment: ', selectedInvestments);
    try {
      await axios.put('http://localhost:3000/newInvestment', {
        loanId: selectedInvestments,
        userId: userId
      })
      .then(() => {
        console.log('getinvestments pleaseeee')
        getInvestments();
      })
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {getAvailableInvestments()}, [open]);

  return (
    <div>
      <Button onClick={handleOpen}>Make a new investment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: 600, height: 500 }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Available Loans
          </Typography>
          <DataGrid
            rows={availableInvestments}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight={true}
            onSelectionModelChange={handleSelection}
          />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={newInvestment}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AvailableInvestments;