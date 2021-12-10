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
                Vestibulum cursus ligula et pulvinar pellentesque. Nunc et nunc lacus.
              </StepText>
            </CardContent>
          </BorrowerCard>
          <BorrowerCard>
            <CardContent>
              <LooksTwo sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Mauris sem ex, volutpat a nulla eu, bibendum interdum libero turpis a.
              </StepText>
            </CardContent>
          </BorrowerCard>
          <BorrowerCard>
            <CardContent>
              <Looks3 sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Ut in risus interdum, tristique augue sem, nulla turpis pulvinar nunc.
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
                Maecenas odio sem, imperdiet non viverra sed, venenatis sed massa.
              </StepText>
            </CardContent>
          </InvestorCard>
          <InvestorCard>
            <CardContent>
              <LooksTwo sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Pellentesque hendrerit nibh blandit, venenatis eros eget, vehicula nisl.
              </StepText>
            </CardContent>
          </InvestorCard>
          <InvestorCard>
            <CardContent>
              <Looks3 sx={{fontSize: '90px', opacity: 0.7}}/>
              <StepText>
                Etiam laoreet, tellus eget lacinia hendrerit, massa enim semper.
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
