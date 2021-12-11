import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

const GetStarted = () => {
  return (
    <Container>
      <Typography variant='h3' color="white" sx={{fontStyle: 'oblique', fontWeight: 'bold', letterSpacing: 1, textAlign: 'center', padding: '10px', width: '75vw', margin: 'auto'}}>
        Ready to get started?
      </Typography>
      <Button sx={{color:"white", fontSize: 30, border: '1px solid white', width: '165px', height: '55px', margin: 'auto'}} component={Link} to={'/signup'}>Sign Up</Button>
    </Container>
  )
}

export default GetStarted;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #287066AA;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;