import styled from 'styled-components';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import { LooksOne, LooksTwo, Looks3 } from '@mui/icons-material';

const BorrowInvestCards = () => {
  return (
    <BorrowInvestContainer>
      <BorrowerContainer id='borrow'>
        <Typography variant='h3' color='white'>Need a loan? We got your back.</Typography>
        <CardContainer>
          <BorrowerCard>
            <CardContent>
              <LooksOne sx={{fontSize: '90px', opacity: 0.7, }}/>
              <StepText>
                Sign up, provide personal information.
              </StepText>
            </CardContent>
          </BorrowerCard>
          <BorrowerCard>
            <CardContent>
              <LooksTwo sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Decide on loan amount, APR and term.
              </StepText>
            </CardContent>
          </BorrowerCard>
          <BorrowerCard>
            <CardContent>
              <Looks3 sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                100% automatic instant approval!
              </StepText>
            </CardContent>
          </BorrowerCard>
        </CardContainer>
      </BorrowerContainer>
      <InvestorContainer id='invest'>
        <Typography variant='h3' color='primary'>Want to invest? We've got great returns.</Typography>
        <CardContainer>
          <InvestorCard>
            <CardContent>
              <LooksOne sx={{fontSize: '90px', opacity: 0.7, }}/>
              <StepText>
                Sign up for an account.
              </StepText>
            </CardContent>
          </InvestorCard>
          <InvestorCard>
            <CardContent>
              <LooksTwo sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Pick which loans you would like to invest in.
              </StepText>
            </CardContent>
          </InvestorCard>
          <InvestorCard>
            <CardContent>
              <Looks3 sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Get ready for 10% returns!
              </StepText>
            </CardContent>
          </InvestorCard>
        </CardContainer>
      </InvestorContainer>
    </BorrowInvestContainer>
  )
}

export default BorrowInvestCards;

const BorrowInvestContainer = styled.div`
  display: block;
`;

const BorrowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #287066AA;
`;

const BorrowerCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25vw;
  height: 400px;
  font-size: 30px;
  margin: auto;
  background-color: #FFFFFFAA;
  justify-content: center;
  align-items: center;
`;

const InvestorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const InvestorCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25vw;
  height: 400px;
  font-size: 30px;
  margin: auto;
  background-color: #287066AA;
  justify-content: center;
  align-items: center;
`;

const StepText = styled(Typography)`
  font-size: 30px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: 30px;
`;
