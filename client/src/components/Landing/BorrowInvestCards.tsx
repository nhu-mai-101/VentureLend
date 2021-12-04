import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BorrowInvestCards = () => {
  return (
    <BorrowInvestContainer>
      <CardContainer>
        <StepCard>
          <CardContent>
            <Typography>
              Borrow Step 1:
            </Typography>
          </CardContent>
        </StepCard>
        <StepCard>
          <CardContent>
            <Typography>
              Step 2:
            </Typography>
          </CardContent>
        </StepCard>
        <StepCard>
          <CardContent>
            <Typography>
              Step 3:
            </Typography>
          </CardContent>
        </StepCard>
      </CardContainer>
      <CardContainer>
        <StepCard>
          <CardContent>
            <Typography>
              Invest Step 1:
            </Typography>
          </CardContent>
        </StepCard>
        <StepCard>
          <CardContent>
            <Typography>
              Step 2:
            </Typography>
          </CardContent>
        </StepCard>
        <StepCard>
          <CardContent>
            <Typography>
              Step 3:
            </Typography>
          </CardContent>
        </StepCard>
      </CardContainer>
    </BorrowInvestContainer>
  )
}

export default BorrowInvestCards;

const BorrowInvestContainer = styled.div`
  display: block;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  padding: 50px;
`;

const StepCard = styled(Card)`
  width: 30vw;
  height: 400px;
  font-size: 30px;
  margin: auto;
  background-color: #287066AA;
`;