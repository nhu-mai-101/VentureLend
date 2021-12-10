import {  AppBar, Grid, Box, Link, Typography } from '@mui/material';
import { Instagram, Twitter, Facebook, LinkedIn } from '@mui/icons-material';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
      <Box>
        <AppBar position='static' >
          <Grid container spacing={2} sx={{ p: '100px', justifyContent: 'center', alignItems: 'flex-start', margin: 0}}>
          <Grid item xs={3}>
            <Box>
              <Typography variant='h4' sx={{ flexGrow: 1, fontWeight: 'medium', letterSpacing: 2 }}>
                VentureLend
              </Typography>
            <Box py={3}>Maecenas odio sem, imperdiet non viverra sed, venenatis sed massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Box>
            </Box>
            <Box>
              <Instagram />
              <Facebook />
              <Twitter />
              <LinkedIn />
            </Box>
          </Grid>
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
  font-size: 17px;
  color: white;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  };
`;