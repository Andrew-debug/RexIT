import { Container } from "../styles";
import { FooterSections, FooterWrap } from "../styles/FooterStyles";
import { shareLinks } from "../utils";
import mapPinIcon from "../assets/icons/map-pin.svg";
import phoneIcon from "../assets/icons/phone.svg";
import shareIcon from "../assets/icons/share.svg";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <FooterSections>
          <FooterSection
            sectionName="phone"
            sectionIcon={phoneIcon}
            text="+48 (987) 345 - 6789"
          />
          <FooterSection
            sectionName="address"
            sectionIcon={mapPinIcon}
            text="Cracker Inc.
            10 Cloverfield Lane
            Berlin IL 10928, Germany"
          />
          <FooterSection
            sectionName="share"
            sectionIcon={shareIcon}
            sectionLinks={shareLinks}
          />
        </FooterSections>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
