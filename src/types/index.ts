export interface ICracker {
  id: string;
  price: number;
  firstCrop: number;
  secondCrop: number;
  thirdCrop: number;
  fourthCrop: number;
}

export type RangeSliderProps = {
  name: string;
  icon: string;
  color: string;
};

interface ISectionLinks {
  name: string;
  link: string;
  icon: string;
}

export type FooterSectionProps = {
  sectionName: string;
  sectionIcon: string;
  text?: string;
  sectionLinks?: { [key: string]: ISectionLinks };
};

export type SocialLinkProps = {
  img: string;
  alt: string;
  link: string;
  text: string;
};
