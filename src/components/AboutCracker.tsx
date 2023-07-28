import { ImageWrap, ImgContain } from "../styles";
import BlackLogo from "../assets/images/cracker-logo-black.svg";
import Nutritions from "../assets/images/nutritions.png";
import {
  AboutCrackerText,
  AboutCrackerWrap,
  LogoWrap,
  NutritionsImage,
  TextBg,
  TextBlock,
} from "../styles/CrackerStyles";

const AboutCracker = () => {
  return (
    <AboutCrackerWrap>
      <AboutCrackerText>
        <h2>about cracker</h2>
        <TextBg />
        <TextBlock>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <LogoWrap>
            <ImageWrap width={120} height={40}>
              <ImgContain src={BlackLogo} alt="logo" />
            </ImageWrap>
          </LogoWrap>
        </TextBlock>
        <NutritionsImage>
          <ImageWrap width={380} height={380}>
            <ImgContain src={Nutritions} alt="nutritions" />
          </ImageWrap>
        </NutritionsImage>
      </AboutCrackerText>
    </AboutCrackerWrap>
  );
};

export default AboutCracker;
