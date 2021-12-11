import React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Buttons, style } from './StepOne'

type Props = {
  back: (e: React.SyntheticEvent) => void;
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  values: any;
}

const Confirmation = ({ back, next, resetStep, handleSubmit, values }: Props) => {
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
        <Box sx={style}>
          <Buttons>
            <Close onClick={handleClose} />
          </Buttons>
          <Typography id='modal-modal-title' variant='h5' component='h2' color='primary'>
            Step Four - Review Your Information
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Name:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.firstName} {values.lastName}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Address:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.address}
            <br />
            {values.city}, {values.state} {values.zipCode}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Occupation:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.occupation}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Income:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.income}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Credit Score:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.creditScore}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Rent:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.rent}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Loan Amount:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.total}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            APR:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.apr}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 1 }} variant='h6'>
            Loan Term:
          </Typography>
          <Typography id='modal-modal-description' variant='body1'>
            {values.term}
          </Typography>
          <Buttons>
            <Button variant='contained' onClick={back}>Back</Button>
            <Button variant='contained' onClick={handleSubmit}>Submit</Button>
          </Buttons>
        </Box>
      </Modal>
    </div>
  )
}

export default Confirmation;