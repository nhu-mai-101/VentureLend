import styled from 'styled-components';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

const BorrowInvestCards = () => {
  return (
    <BorrowInvestContainer>
      <BorrowerContainer>
        <BorrowerCard>
          <CardContent>
            <Typography>
              Borrow Step 1:
            </Typography>
          </CardContent>
        </BorrowerCard>
        <BorrowerCard>
          <CardContent>
            <Typography>
              Step 2:
            </Typography>
          </CardContent>
        </BorrowerCard>
        <BorrowerCard>
          <CardContent>
            <Typography>
              Step 3:
            </Typography>
          </CardContent>
        </BorrowerCard>
      </BorrowerContainer>
      <InvestorContainer>
        <InvestorCard>
          <CardContent>
            <Typography>
              Invest Step 1:
            </Typography>
          </CardContent>
        </InvestorCard>
        <InvestorCard>
          <CardContent>
            <Typography>
              Step 2:
            </Typography>
          </CardContent>
        </InvestorCard>
        <InvestorCard>
          <CardContent>
            <Typography>
              Step 3:
            </Typography>
          </CardContent>
        </InvestorCard>
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 50px;
  background-color: #287066AA;
`;

const BorrowerCard = styled(Card)`
  width: 30vw;
  height: 400px;
  font-size: 30px;
  margin: auto;
  background-color: #FFFFFFAA;
`;

const InvestorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 50px;
`;

const InvestorCard = styled(Card)`
  width: 30vw;
  height: 400px;
  font-size: 30px;
  margin: auto;
  background-color: #287066AA;
`;