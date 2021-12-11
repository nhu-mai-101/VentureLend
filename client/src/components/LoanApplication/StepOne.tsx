import React from 'react';
import styled from 'styled-components';
import { Box, Button, Typography, Modal, TextField, MenuItem } from '@mui/material';
import { Close } from '@mui/icons-material';

type Props = {
  next: (e: React.SyntheticEvent) => void;
  resetStep: () => void;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
}

const StepOne = ({ next, resetStep, handleFormChange, values }: Props) => {
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
          <Buttons>
            <Close onClick={handleClose} />
          </Buttons>
          <Typography id='modal-modal-title' variant='h5' component='h2' color='primary'>
            Step One - Personal Information
          </Typography>
          <br />
          What is your name?
          <br />
          <TextField
            required
            fullWidth
            margin='normal'
            id='firstName'
            name='firstName'
            label='First Name'
            variant='outlined'
            value={values.firstName}
            onChange={handleFormChange}
          />
          <br />
          <TextField
            required
            fullWidth
            margin='normal'
            id='lastName'
            name='lastName'
            label='Last Name'
            variant='outlined'
            value={values.lastName}
            onChange={handleFormChange}
          />
          <br />
          What is your address?
          <br />
          <TextField
            required
            fullWidth
            margin='normal'
            id='address'
            name='address'
            label='Address'
            variant='outlined'
            value={values.address}
            onChange={handleFormChange}
          />
          <br />
          <TextField
            required
            fullWidth
            margin='normal'
            id='city'
            name='city'
            label='City'
            variant='outlined'
            value={values.city}
            onChange={handleFormChange}
          />
          <TextField
            required
            select
            fullWidth
            margin='normal'
            id='state'
            name='state'
            label='State'
            value={values.state ?? ''}
            onChange={handleFormChange}
          >
            {states.map((state) => (
            <MenuItem
              key={state}
              value={state}
            >
              {state}
            </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            fullWidth
            margin='normal'
            id='zipCode'
            name='zipCode'
            label='Zip Code'
            variant='outlined'
            value={values.zipCode}
            onChange={handleFormChange}
          />
          <br />
          <Buttons>
            <Button variant='contained' onClick={handleClose}>Cancel</Button>
            <Button variant='contained' onClick={next}>Next</Button>
          </Buttons>
        </Box>
      </Modal>
    </div>
  )
}

export default StepOne;

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

export const style = {
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

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 5px;
`;