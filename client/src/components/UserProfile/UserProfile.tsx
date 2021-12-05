import React, {useEffect, useState, useContext} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import LoanList from './LoanList'
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
      <userContext.Provider value={userInfo}>
        {/* {console.log('currentLoans:', currentLoans)} */}
        <div>
          Hello {userInfo.firstName}<br />
          E-mail: {currentUser.email}
        </div>
        <div>
          Current Loans:
          <LoanList />
          <LoanAppForm />
        </div>
        <div>
          Current Investments:
          <AvailableInvestments />
        </div>
      </userContext.Provider>
    </div>
  )
}

export default UserProfile;


// import {useUser} from '../UserProfile/UserProfile';
// const { userId } = useUser();
// {console.log('asdfasdfsadfasdf:', userId)}