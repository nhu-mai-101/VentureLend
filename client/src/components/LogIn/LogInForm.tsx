import * as React from 'react';
import {useState}  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LogInForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

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
        Log In
      </Typography>
      <TextField
        required
        id="email"
        label="E-mail"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        id="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color="inherit" onClick={handleSubmit}>
        LOG IN
      </Button>
      <Typography>
        Don't have an account? Sign Up
      </Typography>
    </Box>
  )
}

export default LogInForm;