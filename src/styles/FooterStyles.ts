import { styled } from "styled-components";
import FooterBg from "../assets/images/footer-bg.png";

export const FooterWrap = styled.footer`
  background-image: url(${FooterBg});
  background-position: center;
  min-height: 788px;
`;

export const FooterSections = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 60px;
  gap: 40px;
`;
export const Section = styled.div`
  display: flex;
  gap: 10px;
`;
export const SectionInner = styled.div`
  h4 {
    margin-left: 5px;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
