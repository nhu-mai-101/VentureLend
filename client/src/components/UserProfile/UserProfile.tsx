import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, CardContent, Typography} from '@mui/material';
import {useAuth} from '../../contexts/AuthContext';
import {Loans} from '../../../../types/loans';
import LoanList from './LoanList';
import CurrentInvestmentsList from '../AvailableInvestments/CurrentInvestmentsList';
import LoanAppForm from '../LoanApplication/LoanAppForm';
import AvailableInvestments from '../AvailableInvestments/AvailableInvestments';


interface IUserInfo {
  userId: Number;
  firstName: String;
  lastName: String;
  email: String
}

const userContext = React.createContext<Partial<IUserInfo>>({});

export const useUser = () => {
  return useContext(userContext)
}

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [currentLoans, setCurrentLoans] = useState<Partial<Loans>>();
  const [currentInvestments, setCurrentInvestments] = useState<Partial<Loans>>();
  const [userInfo, setUserInfo] = useState<Partial<IUserInfo>>({
    userId: undefined,
    firstName: '',
    lastName: '',
    email: ''
  });

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
    } catch (error) {
      console.log(error);
    }
  }

  const getLoans = async () => {
    try {
      await axios.get('http://localhost:3000/currentLoans', {
        params: {
          userId: userInfo.userId
        }
      })
      .then((data) => {
        setCurrentLoans(data.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getInvestments = async () => {
    try {
      await axios.get('http://localhost:3000/currentInvestments', {
        params: {
          userId: userInfo.userId
        }
      })
      .then((data) => {
        setCurrentInvestments(data.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {getUserInfo(currentUser.email)}, []);
  useEffect(() => {getLoans()}, [userInfo]);
  useEffect(() => {getInvestments()}, [userInfo]);

  return (
    <Container>
      <userContext.Provider value={userInfo}>
        <Cards>
          <CardContent>
            <Typography variant='h4' color='primary'>Hello {userInfo.firstName}!</Typography>
            <br />
            E-mail: {currentUser.email}
          </CardContent>
        </Cards>
        <Cards>
          <CardContent>
            <Heading>
              <Typography variant='h4' color='primary'>Current Loans:</Typography>
              <LoanAppForm getLoans={getLoans}/>
            </Heading>
            <LoanList loans={currentLoans}/>
          </CardContent>
        </Cards>
        <Cards>
          <CardContent>
            <Heading>
              <Typography variant='h4' color='primary'>Current Investments:</Typography>
              <AvailableInvestments getInvestments={getInvestments}/>
            </Heading>
            <CurrentInvestmentsList loans={currentInvestments}/>
          </CardContent>
        </Cards>
      </userContext.Provider>
    </Container>
  )
}

export default UserProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  row-gap: 15px;
  padding: 30px;
`;

const Cards = styled(Card)`
  width: 800px;
  border: 1px solid grey;
  margin: auto;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;