import React, {useEffect, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LoanList from './LoanList'


interface IUserInfo {
  userId: Number;
  firstName: String;
  lastName: String;
  email: String
}

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState<Partial<IUserInfo>>({
    userId: undefined,
    firstName: '',
    lastName: '',
    email: ''
  });
  // const [currentLoans, setCurrentLoans] = useState<any>();


  const getUserInfo = async (userEmail: string) => {
    try {
      await axios.get('http://localhost:3000/getUser', {
        params: {
          email: userEmail
        }
      })
      .then((data) => {
        setUserInfo({
          ...userInfo,
          userId: data.data[0].id,
          firstName: data.data[0].first_name,
          lastName: data.data[0].last_name,
          email: data.data[0].email
        });
      });
      // await axios.get('http://localhost:3000/currentLoans', {
      //   params: {
      //     userId: userInfo.userId
      //   }
      // })
      // .then((data) => {
      //   setCurrentLoans(data)
      // })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {getUserInfo(currentUser.email)}, [])

  return (
    <div>
      {/* {console.log('currentLoans:', currentLoans)} */}
      <div>
        Hello {userInfo.firstName}<br />
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