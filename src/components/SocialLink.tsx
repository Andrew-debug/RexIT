import { ImageWrap, ImgContain } from "../styles";
import { Link, SocialLinkWrap } from "../styles/SocialLinkStyles";
import { SocialLinkProps } from "../types";

const SocialLink = ({ img, alt, link, text }: SocialLinkProps) => {
  return (
    <SocialLinkWrap>
      <ImageWrap width={32} height={32}>
        <ImgContain src={img} alt={alt} />
      </ImageWrap>
      <Link href={link} target="_blank">
        {text}
      </Link>
    </SocialLinkWrap>
  );
};

export default SocialLink;
