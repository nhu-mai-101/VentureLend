import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import LandingPage from '../Landing/Landing';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar >
              <Link to="/">
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                  LendingClub
                </Typography>
              </Link>
              <Link to="/signup">
                <ActionButton color="inherit">Sign Up</ActionButton>
              </Link>
              <Link to="/login">
                <ActionButton color="inherit">Login</ActionButton>
              </Link>
          </StyledToolbar>
        </AppBar>
          <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="/signup" element={<SignUp />}>
            </Route>
            <Route path="/login" element={<LogIn />}>
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