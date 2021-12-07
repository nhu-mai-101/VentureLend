import React from 'react';
import { Box, Button, Typography, Modal, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Close } from '@mui/icons-material';

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

type Props = {
  back: (e: React.SyntheticEvent) => void;
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  handleSelectChange: (event: SelectChangeEvent) => void;
  values: any;
}

const loanAmounts = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000];
const loanRates = [2.49, 3.89, 4.29];
const loanTerms = [12, 24, 36, 48, 60]

const StepThree = ({ back, next, resetStep, handleSelectChange, values }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpen(false);
    resetStep();
  }

  return (
    <div>
      <Button onClick={next}>Apply for a new loan</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Step Three
          </Typography>
          How much woul you like to borrow?
          <br />
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="total"
            label="Amount"
            autoWidth
            value={values.total ?? 0}
            onChange={handleSelectChange}
          >
          {loanAmounts.map((amount) => (
            <MenuItem
              key={amount}
              value={amount}
            >
              {amount}
            </MenuItem>
          ))}
          </Select>
          <br />
          What Annual Percentage Rate would you like?
          <br />
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="apr"
            label="APR"
            autoWidth
            value={values.apr ?? 0}
            onChange={handleSelectChange}
          >
          {loanRates.map((rate) => (
            <MenuItem
              key={rate}
              value={rate}
            >
              {rate}
            </MenuItem>
          ))}
          </Select>
          <br />
          How long would you like to repay the loan?
          <br />
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="term"
            label="Term (months)"
            autoWidth
            value={values.term ?? 0}
            onChange={handleSelectChange}
          >
          {loanTerms.map((term) => (
            <MenuItem
              key={term}
              value={term}
            >
              {term}
            </MenuItem>
          ))}
          </Select>
          <Button onClick={back}>Back</Button>
          <Button onClick={next}>Review</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default StepThree;