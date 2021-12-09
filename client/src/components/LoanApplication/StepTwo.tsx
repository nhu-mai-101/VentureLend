import React from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  back: (e: React.SyntheticEvent) => void;
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
}

const StepTwo = ({ back, next, resetStep, handleFormChange, values }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen(false);
    resetStep();
  }

  return (
    <div>
      <Button variant='contained' onClick={next}>Apply for a new loan</Button>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box component='form' sx={style}>
          <Close onClick={handleClose} />
          <Typography id='modal-modal-title' variant='h5' component='h2' color='primary'>
            Step Two - Financial Information
          </Typography>
          <br />
          What is your occupation?
          <TextField
            required
            fullWidth
            margin='normal'
            id='occupation'
            name='occupation'
            label='Occupation'
            variant='outlined'
            onChange={handleFormChange}
          />
          <br />
          What is your Annual Gross (before taxes) Income?
          <TextField
            required
            fullWidth
            margin='normal'
            id='income'
            name='income'
            label='Income'
            variant='outlined'
            type='number'
            onChange={handleFormChange}
          />
          <br />
          What is your Credit Score? (Experian or TransUnion)
          <TextField
            required
            fullWidth
            margin='normal'
            id='creditScore'
            name='creditScore'
            label='Credit Score'
            variant='outlined'
            type='number'
            onChange={handleFormChange}
          />
          <br />
          How much do you pay for rent each month?
          <TextField
            required
            fullWidth
            margin='normal'
            id='rent'
            name='rent'
            label='Rent'
            variant='outlined'
            type='number'
            onChange={handleFormChange}
          />
          <br />
          <Button variant='contained' onClick={back}>Back</Button>
          <Button variant='contained' onClick={next}>Next</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default StepTwo;