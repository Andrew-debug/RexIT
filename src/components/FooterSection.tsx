import { Section, SectionInner } from "../styles/FooterStyles";
import { ImageWrap, ImgContain } from "../styles";
import { FooterSectionProps } from "../types";
import SocialLink from "./SocialLink";

const FooterSection = ({
  sectionName,
  sectionIcon,
  text,
  sectionLinks,
}: FooterSectionProps) => {
  return (
    <Section>
      <ImageWrap width={24} height={24}>
        <ImgContain src={sectionIcon} alt={sectionName} />
      </ImageWrap>
      <SectionInner>
        <h4>{sectionName}</h4>
        {text && <p style={{ maxWidth: 253 }}>{text}</p>}
        {sectionLinks &&
          Object.values(sectionLinks).map((linkData, index) => (
            <SocialLink
              key={index}
              img={linkData.icon}
              alt={linkData.name}
              link={linkData.link}
              text={`${linkData.name}.com`}
            />
          ))}
      </SectionInner>
    </Section>
  );
};

export default FooterSection;
