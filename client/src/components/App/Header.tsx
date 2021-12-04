import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import LandingPage from '../Landing/Landing';
import UserProfile from '../UserProfile/UserProfile';
import LoanApplication from '../LoanApplication/LoanApplication'
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar >
            <Avatar component={Link} to={'/'}>LC</Avatar>
            <Typography variant="h3" sx={{ flexGrow: 1 }}>
              LendingClub
            </Typography>
            <Button color="inherit" component={Link} to={'/signup'}>Sign Up</Button>
            <Button color="inherit" component={Link} to={'/login'}>Login</Button>
          </StyledToolbar>
        </AppBar>
          <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="/signup" element={<SignUp />}>
            </Route>
            <Route path="/login" element={<LogIn />}>
            </Route>
            <Route path="/userprofile" element={<UserProfile />}>
            </Route>
            <Route path="/loanapp" element={<LoanApplication />}>
            </Route>
            <Route path="/invest" element={<LoanApplication />}>
            </Route>
          </Routes>
      </Box>
    </Router>
  )
}

export default Header;

const StyledToolbar = styled(Toolbar)`
  height: 80px;
  display: flex;
  flex-direction: row;
`;

const ActionButton = styled(Button)`
  width: 150px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
`;