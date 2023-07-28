import { ImageWrap, ImgContain } from "../styles";
import { Container } from "../styles";
import { HeaderInnerContent, HeaderWrap } from "../styles/HeaderStyles";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import WhiteLogo from "../assets/images/cracker-logo-white.svg";

const Header = () => {
  return (
    <header style={{ position: "relative" }}>
      <HeaderWrap>
        <Container>
          <HeaderInnerContent>
            <ImageWrap width={120} height={40}>
              <ImgContain src={WhiteLogo} alt="logo" />
            </ImageWrap>
            <ShoppingCart />
          </HeaderInnerContent>
        </Container>
      </HeaderWrap>
      <Navbar />
    </header>
  );
};

export default Header;
