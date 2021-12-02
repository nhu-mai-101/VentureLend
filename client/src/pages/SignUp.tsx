import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SignUp = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
        width: '30vw',
        border: '1px solid grey',
        borderRadius: 2,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        Sign Up
      </Typography>
      <TextField
        required
        id="firstName"
        label="First Name"
        variant="outlined"
      />
      <TextField
        required
        id="lastName"
        label="Last Name"
        variant="outlined"
      />
      <TextField
        required
        id="email"
        label="E-mail"
        variant="outlined"
      />
      <TextField
        required
        id="password"
        label="Password"
        variant="outlined"
      />
      <Button color="inherit">
        SIGN UP
      </Button>
      <Typography>
        Already have an account? Log In
      </Typography>
    </Box>
  )
}

export default SignUp;