import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

interface ImageWrapProps {
  width: number;
  height: number;
}
export const ImageWrap = styled.div<ImageWrapProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export const ImgContain = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
