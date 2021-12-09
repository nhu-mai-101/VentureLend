import {  AppBar, Grid, Box, Link } from '@mui/material';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
      <Box>
        <AppBar position='static' >
          <Grid container spacing={5} sx={{ p: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Grid item xs={3} padding={5}>
            <Box>Logo</Box>
            <Box>
              LendingClub
            </Box>
            <Box>
              Social Media Icons
            </Box>
          </Grid>
          <Grid item padding={5}>
            <Box borderBottom={1} fontSize='20px'>Help</Box>
            <Box>
              <NavLinks href='/'>Email</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Phone Number</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Address</NavLinks>
            </Box>
          </Grid>
          <Grid item padding={5}>
            <Box borderBottom={1} fontSize='20px'>Company</Box>
            <Box>
              <NavLinks href='/'>About Us</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Media</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Careers</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Blog</NavLinks>
            </Box>
          </Grid>
          <Grid item padding={5}>
            <Box borderBottom={1} fontSize='20px'>Legal</Box>
            <Box>
              <NavLinks href='/'>Privacy Policy</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Terms of Use</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Disclosures and Licensing</NavLinks>
            </Box>
            <Box>
              <NavLinks href='/'>Affiliated Business</NavLinks>
            </Box>
          </Grid>
          </Grid>
        </AppBar>
      </Box>
    </footer>
  )
}

export default Footer;

const NavLinks = styled(Link)`
  padding: 5px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  };
`;