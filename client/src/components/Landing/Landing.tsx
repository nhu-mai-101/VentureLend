import * as React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import BorrowInvestCards from './BorrowInvestCards';


const LandingPage = () => {
  return (
    <div>
      <Background>
        <ActionButton variant="contained">Borrow</ActionButton>
        <ActionButton variant="contained">Invest</ActionButton>
      </Background>
      <div>
        <Typography variant='h3' sx={{fontStyle: 'oblique', fontWeight: 'bold', letterSpacing: 6, textAlign: 'center', padding: 10}}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tellus id nibh imperdiet mollis ut sit amet ante."
        </Typography>
      </div>
      <BorrowInvestCards />
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
  background-image: url('https://content1.getnarrativeapp.com/static/453cc1b7-7a5d-45ad-873f-aaa41845d566/family-in-home-connecticut-candid.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
const ActionButton = styled(Button)`
  width: 200px;
  height: 65px;
  margin: 100px 20px;
  font-size: 25px;
`;