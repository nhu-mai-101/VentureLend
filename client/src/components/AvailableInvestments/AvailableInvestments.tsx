import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import  { useUser } from '../UserProfile/UserProfile';
import { Box, Button, Typography, Modal, Alert } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Close } from '@mui/icons-material';

type Props = {
  getInvestments: () => void;
}

const AvailableInvestments = ({ getInvestments }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [availableInvestments, setAvailableInvestments] = React.useState<any>();
  const [selectedInvestments, setSelectedInvestments] = React.useState<number>(0);
  const [success, setSuccess] = React.useState<string>('');
  const { userId } = useUser();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSuccess('');
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 100 },
    { field: 'total', headerName: 'Total', type: 'number', width: 100 },
    { field: 'apr', headerName: 'APR', type: 'number', width: 100 },
    { field: 'term', headerName: 'Loan Term', type: 'number', width: 100 },
  ];

  const getAvailableInvestments = async () => {
    try {
      await axios.get('/availableInvestments', {
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
    try {
      await axios.put('/newInvestment', {
        loanId: selectedInvestments,
        userId: userId
      })
      .then(() => {
        setSuccess('Congratulations! You have invested in a new loan!')
        getInvestments();
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {getAvailableInvestments()}, [open]);

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Make a new investment</Button>
      <Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Buttons>
              <Close onClick={handleClose} />
            </Buttons>
            <Typography id='modal-modal-title' variant='h5' component='h2' color='primary'>
              Available Loans
            </Typography>
            <Typography id='modal-modal-title' variant='h6' component='h2' color='primary'>
              Please select a loan you would like to invest in.
            </Typography>
            {success &&
              <div>
                <Alert severity='success'>{success}</Alert>
                <Button variant='contained' onClick={handleClose}>Return to profile</Button>
              </div>
            }
            {!success &&
              <div>
                <DataGrid
                  rows={availableInvestments}
                  columns={columns}
                  pageSize={10}
                  autoHeight={true}
                  onSelectionModelChange={handleSelection}
                />
                <Buttons>
                  <Button variant='contained' onClick={handleClose}>Cancel</Button>
                  <Button variant='contained' onClick={newInvestment}>Submit</Button>
                </Buttons>
              </div>
            }
          </Box>
        </Modal>
      </Container>
    </div>
  );
}

export default AvailableInvestments;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 10px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 5px;
`;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};