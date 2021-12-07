import React from 'react';
import { Box, Button, Typography, Modal, TextField, Select, MenuItem, SelectChangeEvent} from '@mui/material';
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

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


type Props = {
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: SelectChangeEvent) => void;
  values: any;
}

const StepOne = ({ next, resetStep, handleFormChange, handleSelectChange, values }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
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
            Step One - Personal Information
          </Typography>
          What is your name?
          <br />
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            value={values.firstName}
            onChange={handleFormChange}
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={values.lastName}
            onChange={handleFormChange}
          />
          <br />
          What is your address?
          <br />
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            variant="outlined"
            value={values.address}
            onChange={handleFormChange}
          />
          <TextField
            required
            id="city"
            name="city"
            label="City"
            variant="outlined"
            value={values.city}
            onChange={handleFormChange}
          />
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="state"
            label="State"
            autoWidth
            value={values.state}
            onChange={handleSelectChange}
          >
            {states.map((state) => (
            <MenuItem
              value={state}
            >
              {state}
            </MenuItem>
            ))}
          </Select>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            variant="outlined"
            value={values.zipCode}
            onChange={handleFormChange}
          />
          <br />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={next}>Next</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default StepOne;