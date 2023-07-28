import { styled } from "styled-components";

interface BtnProps {
  $isBtnHovered: boolean;
}

export const AddToCartBtn = styled.button<BtnProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${({ $isBtnHovered }) => ($isBtnHovered ? "230px" : "56px")};
  height: 56px;
  border: none;
  border-radius: 90px;
  padding: 16px;
  background-color: var(--primary-red);
  transition: width 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  span {
    position: absolute;
    width: 150px;
    top: 14px;
    left: 20px;
    text-transform: uppercase;
    color: var(--white-text);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
`;
