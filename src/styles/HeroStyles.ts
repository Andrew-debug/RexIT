import { styled } from "styled-components";
import heroBg from "../assets/images/hero-bg.png";

export const HeroWrap = styled.div`
  min-height: 880px;
  background-image: url(${heroBg});
  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 64px;
    line-height: 72px;
  }
`;

export const HeroInnerContent = styled.div`
  display: flex;
`;

export const HeroLeftBlock = styled.div`
  position: relative;
  width: 940px;
  height: 360px;
  padding: 32px 80px 60px 80px;
  background-color: #8bb37dcc;
  top: 240px;
  display: flex;
  justify-content: flex-end;
  p {
    display: flex;
    align-items: flex-end;
    width: 380px;
    height: 268px;
    padding-right: 24px;
    border-right: 1px solid var(--white-text);
    text-align: right;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
`;

export const HeroRightBlock = styled.div`
  position: relative;
  width: 543px;
  height: 144px;
  top: 254px;
  left: -43px;
`;
export const HeroButton = styled.button`
  all: unset;
  position: absolute;
  top: 284px;
  right: 0;
  text-transform: uppercase;
  background-color: var(--primary-red);
  border-radius: 90px;
  padding: 14px 32px 14px 32px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--primary-red-hovered);
  }
`;
