import React from 'react';
import styled from 'styled-components';
import { Box, Button, Typography, Modal, Alert, AlertTitle } from '@mui/material';
import { Close } from '@mui/icons-material';

type Props = {
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  getLoans: () => void;
  values: any;
}

const Approval = ({ next, resetStep, getLoans, values }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (e: React.SyntheticEvent) => {
    setOpen(false);
    resetStep();
    getLoans();
  }

  return (
    <div>
      <Button variant='contained' onClick={next}>Apply for a new loan</Button>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Buttons>
            <Close onClick={handleClose} />
          </Buttons>
          <Alert severity='success'>
            <AlertTitle>
              Congratulations {values.firstName}!
            </AlertTitle>
            You have been approved for your loan:
          </Alert>
          <Typography id='modal-modal-description' sx={{ mt: 2 }} variant='h6'>
            Loan Amount:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.total}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }} variant='h6'>
            APR:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.apr}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }} variant='h6'>
            Loan Term:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.term}
          </Typography>
          <Buttons>
            <Button variant='contained' onClick={handleClose}>Finish</Button>
          </Buttons>
        </Box>
      </Modal>
    </div>
  )
}

export default Approval;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 5px;
`;