import { useState } from "react";
import { ButtonContainer, Container, Header, Input } from "./style";

const LoginPage = (props) => {
    const { setLoginPage } = props
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <Container>
      <Header> Sign in to your account </Header>
      <Input placeholder="Email/Phone Number" value={mail} onChange={(evt) => setMail(evt.target.value)} />
      <Input placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
      <ButtonContainer onClick={() =>{
        if(mail && password) {
            setLoginPage(false)
        } else {
            setLoginPage(true)
        }
      }}>
        LogIn
      </ButtonContainer>
    </Container>
  );
};

export default LoginPage;
