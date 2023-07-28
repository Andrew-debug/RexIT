import { styled } from "styled-components";
import CrackerBg from "../assets/images/cracker-bg.png";

export const CrackerInner = styled.div`
  background-image: url(${CrackerBg});
  overflow: hidden;
`;

export const AboutCrackerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const NutritionsImage = styled.div`
  position: absolute;
  top: 80px;
  left: -200px;
`;

export const AboutCrackerText = styled.div`
  position: relative;
  z-index: 2;
  h2 {
    margin: 80px 0 30px 250px;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    color: var(--black-text);
    text-transform: uppercase;
  }
`;
export const TextBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 372px;
  z-index: 3;
  p {
    margin-left: 80px;
    width: 713px;
    color: var(--black-text);
    font-size: 18px;
  }
`;

export const TextBg = styled.div`
  position: absolute;
  width: 1000%;
  height: 372px;
  background-color: rgba(229, 211, 207, 0.8);
  pointer-events: none;
  z-index: 2;
`;

export const LogoWrap = styled.div`
  position: absolute;
  bottom: -15px;
  left: 700px;
`;

export const ConstructorWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto 140px auto;
`;

export const ConstructorHeader = styled.div`
  color: var(--black-text);
  text-align: center;
  h2 {
    margin-top: 60px;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    text-transform: uppercase;
  }
  span {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const Pack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
`;
