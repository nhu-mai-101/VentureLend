import React from 'react';
import {useState, useRef}  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { Button, TextField, Box, Typography, Alert } from '@mui/material';

const SignUpForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null!);
  const lastNameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const { signUp } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);

      await axios.post('/newUser', {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
      });

      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate('/userprofile');
    } catch (error) {
      setError('Failed to create an account')
    }
    setLoading(false)
  };

  return (
    <Box
      component='form'
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
        margin: 'auto',
        padding: '15px'
      }}
      noValidate
      autoComplete='off'
    >
      <Typography variant='h3' component='div' sx={{ flexGrow: 1, color: '#004d40' }}>
        Sign Up
      </Typography>
      {error && <Alert severity='error'>{error}</Alert>}
      <TextField
        required
        id='firstName'
        label='First Name'
        variant='outlined'
        inputRef={firstNameRef}
      />
      <TextField
        required
        id='lastName'
        label='Last Name'
        variant='outlined'
        inputRef={lastNameRef}
      />
      <TextField
        required
        id='email'
        label='E-mail'
        variant='outlined'
        inputRef={emailRef}
      />
      <TextField
        required
        id='password'
        label='Password (minimum 6 characters)'
        variant='outlined'
        inputRef={passwordRef}
        type='password'
      />
      <Button sx={{color:"#004d40", fontSize: 25, margin: '10px', width: '150px', height: '45px'}} onClick={handleSubmit} disabled={loading}>
        SIGN UP
      </Button>
      <Typography>
        Already have an account? <Link to='/login'>Log In</Link>
      </Typography>
    </Box>
  )
}

export default SignUpForm;