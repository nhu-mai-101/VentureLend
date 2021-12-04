import * as React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LoanList from './LoanList'


const UserProfile = () => {
  const { currentUser } = useAuth();
  console.log(currentUser.email)
  return (
    <div>
      <div>
        Hello USER NAME <br />
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
