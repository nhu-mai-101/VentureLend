import * as React from 'react';
import {useState, useRef}  from 'react';
import {useAuth} from '../../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const SignUpForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null!);
  const lastNameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const { signUp } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value)
      history.push('/');
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
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
        Sign Up
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        required
        id="firstName"
        label="First Name"
        variant="outlined"
        inputRef={firstNameRef}
      />
      <TextField
        required
        id="lastName"
        label="Last Name"
        variant="outlined"
        inputRef={lastNameRef}
      />
      <TextField
        required
        id="email"
        label="E-mail"
        variant="outlined"
        inputRef={emailRef}
      />
      <TextField
        required
        id="password"
        label="Password"
        variant="outlined"
        inputRef={passwordRef}
      />
      <Button color="inherit" onClick={handleSubmit} disabled={loading}>
        SIGN UP
      </Button>
      <Typography>
        Already have an account? <Link to="/login">Log In</Link>
      </Typography>
    </Box>
  )
}

export default SignUpForm;