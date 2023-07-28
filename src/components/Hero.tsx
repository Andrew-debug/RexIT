import {
  HeroLeftBlock,
  HeroRightBlock,
  HeroWrap,
  HeroInnerContent,
  HeroButton,
} from "../styles/HeroStyles";

const Hero = () => {
  return (
    <HeroWrap>
      <HeroInnerContent>
        <HeroLeftBlock>
          <p>
            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>
        </HeroLeftBlock>
        <HeroRightBlock>
          <h1>mostly tastes with freshes</h1>
          <HeroButton>taste it</HeroButton>
        </HeroRightBlock>
      </HeroInnerContent>
    </HeroWrap>
  );
};

export default Hero;
