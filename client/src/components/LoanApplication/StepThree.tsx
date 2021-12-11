import React from 'react';
import { Box, Button, Typography, Modal, TextField, MenuItem } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Buttons, style } from './StepOne'

type Props = {
  back: (e: React.SyntheticEvent) => void;
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
}

const loanAmounts = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000];
const loanRates = [2.49, 3.89, 4.29];
const loanTerms = [12, 24, 36, 48, 60]

const StepThree = ({ back, next, resetStep, handleFormChange, values }: Props) => {
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component='form' sx={style}>
          <Buttons>
            <Close onClick={handleClose} />
          </Buttons>
          <Typography id="modal-modal-title" variant="h5" component="h2" color='primary'>
            Step Three - Loan Details
          </Typography>
          <br />
          How much would you like to borrow?
          <br />
          <TextField
            required
            select
            fullWidth
            margin='normal'
            id="demo-simple-select"
            name="total"
            label="Amount"
            value={values.total ?? 0}
            onChange={handleFormChange}
          >
          {loanAmounts.map((amount) => (
            <MenuItem
              key={amount}
              value={amount}
            >
              {amount}
            </MenuItem>
          ))}
          </TextField>
          <br />
          What Annual Percentage Rate would you like?
          <br />
          <TextField
            required
            select
            fullWidth
            margin='normal'
            id="demo-simple-select"
            name="apr"
            label="APR"
            value={values.apr ?? 0}
            onChange={handleFormChange}
          >
          {loanRates.map((rate) => (
            <MenuItem
              key={rate}
              value={rate}
            >
              {rate}
            </MenuItem>
          ))}
          </TextField>
          <br />
          How long would you like to repay the loan?
          <br />
          <TextField
            required
            select
            fullWidth
            margin='normal'
            id="demo-simple-select"
            name="term"
            label="Term (months)"
            value={values.term ?? 0}
            onChange={handleFormChange}
          >
          {loanTerms.map((term) => (
            <MenuItem
              key={term}
              value={term}
            >
              {term}
            </MenuItem>
          ))}
          </TextField>
          <Buttons>
            <Button variant='contained' onClick={back}>Back</Button>
            <Button variant='contained' onClick={next}>Review</Button>
          </Buttons>
        </Box>
      </Modal>
    </div>
  )
}

export default StepThree;