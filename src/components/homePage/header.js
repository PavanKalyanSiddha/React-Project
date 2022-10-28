import { BorderLine, GridContainer, HeaderContainer } from "./style";

const Header = () => {
  return (<>
    <HeaderContainer>
      <img src='https://thumbs.dreamstime.com/b/dots-logo-7424189.jpg' width="40px" height="40px" alt='image' />
      <GridContainer>
        <span style={{ color: "green" }}>Home</span>
        <span>Language</span>
        <span>Genre</span>
        <span>Account</span>
      </GridContainer>
    </HeaderContainer>
    <BorderLine></BorderLine>
    <BorderLine></BorderLine>
    </>
  );
};

export default Header;
