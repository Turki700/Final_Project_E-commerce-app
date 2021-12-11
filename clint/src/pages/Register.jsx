import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3062610/pexels-photo-3062610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
  
const Wrapper = styled.div`
    width: 60%;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: white;
    opacity: 0.9;
`;

const WrapperOne = styled.div`
    flex: 3;
`
const WrapperTwo = styled.div`
    flex: 1;
    text-align: center;
`
const WrapperBetween = styled.div`
    border-left: 1px solid gray;
    height: 200px;
    margin-left: 20px
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const TitleH3 = styled.h4`
    margin: 20px
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperOne>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
            </Form>
        </WrapperOne>
        <WrapperBetween />
        <WrapperTwo>
            <Title>Or</Title>
            <TitleH3>Create An Account By</TitleH3>
            <Button>Aother</Button>
        </WrapperTwo>
      </Wrapper>
    </Container>
  );
};

export default Register;