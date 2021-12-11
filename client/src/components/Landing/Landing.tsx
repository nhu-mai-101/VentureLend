import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import BorrowInvestCards from './BorrowInvestCards';
import GetStarted from './GetStarted'


const LandingPage = () => {
  return (
    <div>
      <Background>
        <ActionButton variant="contained" href='#borrow'>Borrow</ActionButton>
        <ActionButton variant="contained" href='#invest'>Invest</ActionButton>
      </Background>
      <div>
        <Typography variant='h3' color="primary" sx={{fontStyle: 'oblique', fontWeight: 'bold', letterSpacing: 6, textAlign: 'center', padding: 10, width: '75vw', margin: 'auto'}}>
          A one stop shop for quick and easy personal loans, and investing with great returns!
        </Typography>
      </div>
      <BorrowInvestCards />
      <GetStarted />
    </div>
  )
}

export default LandingPage;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  width: 100vw;
  height: 60vh;
  padding-bottom: 5%;
  background-image: url('https://i.ibb.co/WnTCD7v/family-in-home-connecticut-candid-2.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ActionButton = styled(Button)`
  width: 200px;
  height: 65px;
  font-size: 25px;
  margin: 50px;
`;