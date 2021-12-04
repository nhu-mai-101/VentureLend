import React, {useEffect, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LoanList from './LoanList'


const UserProfile = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState<string>('')

  const getUserInfo = (userEmail: string) => {
    axios.get('http://localhost:3000/getUser', {
      params: {
        email: userEmail
      }
    })
    .then((data) => {
      // setUser(data);
      console.log('success meow', data);
    })
    .catch((error) => {console.log('oh no catch', error)})
  }

  useEffect(() => {getUserInfo(currentUser.email)}, [])

  return (
    <div>
      <div>
        Hello {user} <br />
        E-mail: {currentUser.email}
      </div>
      <div>
        Current Loans:
        <LoanList />
        <Button component={Link} to={'/loanapp'}>Apply For a New Loan</Button>
      </div>
      <div>
        Current Investments:
        <Button component={Link} to={'/invest'}>Make a New Investment</Button>
      </div>
    </div>
  )
}

export default UserProfile;
