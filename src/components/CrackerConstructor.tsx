import { useSelector } from "react-redux";
import { ICracker } from "../types";
import { Container } from "../styles";
import {
  ConstructorHeader,
  ConstructorWrap,
  Pack,
} from "../styles/CrackerStyles";
import firstSlider from "../assets/icons/first-slider.svg";
import secondSlider from "../assets/icons/second-slider.svg";
import thirdSlider from "../assets/icons/third-slider.svg";
import fourthSlider from "../assets/icons/fourth-slider.svg";
import RangeSlider from "./RangeSlider";
import DropdownSection from "./DropdownSection";
import AddToCartButton from "./AddToCartButton";

const CrackerConstructor = () => {
  const cracker = useSelector(
    (store: { crackerCalc: ICracker }) => store.crackerCalc
  );

  return (
    <Container>
      <ConstructorWrap>
        <ConstructorHeader>
          <h2>cracker constructor</h2>
          <span>Current value: 143&euro;</span>
        </ConstructorHeader>
        <RangeSlider name="firstCrop" icon={firstSlider} color="#00A651" />
        <RangeSlider name="secondCrop" icon={secondSlider} color="#49743F" />
        <RangeSlider name="thirdCrop" icon={thirdSlider} color="#ABA000" />
        <RangeSlider name="fourthCrop" icon={fourthSlider} color="#939393" />
        <Pack>
          <DropdownSection />
          <AddToCartButton cracker={cracker} />
        </Pack>
      </ConstructorWrap>
    </Container>
  );
};

export default CrackerConstructor;
