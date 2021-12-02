import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from '../pages/SignUp.tsx';
import LogIn from '../pages/LogIn.tsx';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            LendingClub
          </Typography>

          <Router>
            <Link to="/signup">
              <ActionButton color="inherit">Sign Up</ActionButton>
            </Link>
            <Link to="/login">
              <ActionButton color="inherit">Login</ActionButton>
            </Link>

            <Routes>
              <Route path="/signup" element={<SignUp />}>
              </Route>
              <Route path="/login" element={<LogIn />}>
              </Route>
            </Routes>
          </Router>

        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default Header;

const StyledToolbar = styled(Toolbar)`
  height: 80px;
`;

const ActionButton = styled(Button)`
  width: 150px;
  height: 40px;
  margin: 5px;
  font-size: 20px;
`;