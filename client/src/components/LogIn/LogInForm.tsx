import React from 'react';
import { useState, useRef }  from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import { Button, TextField, Box, Typography, Alert } from '@mui/material';


const SignUpForm = () => {
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const { logIn } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value)
      navigate('/userprofile');
    } catch {
      setError('Failed to log into account')
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
      <Typography variant='h3' component='div' sx={{ flexGrow: 1, color: '#004d40'}}>
        Log In
      </Typography>
      {error && <Alert severity='error'>{error}</Alert>}
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
        label='Password'
        variant='outlined'
        inputRef={passwordRef}
        type='password'
      />
      <Button sx={{color:'#004d40', fontSize: 25, margin: '10px', width: '150px', height: '45px'}} onClick={handleSubmit} disabled={loading}>
        LOG IN
      </Button>
      <Typography>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </Typography>
    </Box>
  )
}

export default SignUpForm;