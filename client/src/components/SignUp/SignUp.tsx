import styled from 'styled-components';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  )
}

export default SignUp;

const Container = styled.div`
  margin: 50px;
  padding: 50px;
  height: 70vh;
`;