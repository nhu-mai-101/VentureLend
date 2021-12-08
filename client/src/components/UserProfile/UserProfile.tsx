import React, {useEffect, useState, useContext} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
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
    <div>
      <userContext.Provider value={userInfo}>
        <div>
          Hello {userInfo.firstName}<br />
          E-mail: {currentUser.email}
        </div>
        <div>
          Current Loans:
          <LoanList loans={currentLoans}/>
          <LoanAppForm getLoans={getLoans}/>
        </div>
        <div>
          Current Investments:
          <CurrentInvestmentsList loans={currentInvestments}/>
          <AvailableInvestments getInvestments={getInvestments}/>
        </div>
      </userContext.Provider>
    </div>
  )
}

export default UserProfile;