import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import LandingPage from '../Landing/Landing';
import UserProfile from '../UserProfile/UserProfile';
import Footer from './Footer';

const Header = () => {
  return (
    <header>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <StyledToolbar >
              <Typography variant='h2' component={Link} to={'/'} sx={{ flexGrow: 1, fontWeight: 'medium', letterSpacing: 2, color: 'white', textDecoration: 'none' }}>
                LendingClub
              </Typography>
              <NavLinks to='/'>About Us</NavLinks>
              <NavLinks to='/'>Our Services</NavLinks>
              <NavLinks to='/'>FAQ</NavLinks>
              <Button sx={{color:"inherit", fontSize: 25, border: '1px solid white', margin: '10px', width: '150px', height: '45px'}} component={Link} to={'/signup'}>Sign Up</Button>
              <Button sx={{color:"inherit", fontSize: 25, border:'1px solid white', margin: '10px', width: '150px', height: '45px'}} component={Link} to={'/login'}>Login</Button>
            </StyledToolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="/signup" element={<SignUp />}>
          </Route>
          <Route path="/login" element={<LogIn />}>
          </Route>
          <Route path="/userprofile" element={<UserProfile />}>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </header>
  )
}

export default Header;

const StyledToolbar = styled(Toolbar)`
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const NavLinks = styled(Link)`
  margin: 20px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  };
`;