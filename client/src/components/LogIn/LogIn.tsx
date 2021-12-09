import styled from 'styled-components';

import LogInForm from './LogInForm';

const LogIn = () => {
  return (
    <Container>
      <LogInForm />
    </Container>
  )
}

export default LogIn;

const Container = styled.div`
  margin: 50px;
  padding: 50px;
  height: 70vh;
`;