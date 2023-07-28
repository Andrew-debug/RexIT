import { styled } from "styled-components";

export const DropdownWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  color: var(--primary-red);
  border: 1px solid var(--primary-red);
  border-radius: 25px;
  cursor: pointer;
  p {
    font-weight: 500;
    padding: 16px 20px;
    line-height: 18px;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 125px;
  top: 65px;
  left: 0;
  background-color: var(--white-text);
  box-sizing: border-box;
  border-radius: 24px;
  line-height: 18px;
  box-shadow: 0px 4px 16px 0px #00000033;
  overflow: hidden;
  :nth-child(1) {
    border-top: none;
  }
  :hover {
    background-color: var(--silver);
  }
`;
export const DropdownItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 12px 0;
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-red);
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border-top: 1px solid var(--primary-red);
  text-transform: uppercase;
`;

interface DropdownArrowProps {
  $isOpen: boolean;
}
export const DropdownArrow = styled.div<DropdownArrowProps>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;
