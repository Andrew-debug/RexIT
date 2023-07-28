import { styled } from "styled-components";

export const ShoppingCartWrap = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
`;
export const Cart = styled.div`
  min-width: 515px;
  min-height: 225px;
  position: absolute;
  top: 45px;
  left: -250px;
  color: var(--black-text);
  background-color: var(--white-text);
  border-radius: 24px;
  padding: 32px;
  z-index: 2;
`;
export const CartButton = styled.button`
  all: unset;
  color: var(--white-text);
  border-radius: 90px;
  background-color: var(--primary-red);
  padding: 11px 24px;
  cursor: pointer;
  p {
    font-weight: 500;
    font-size: 14px;
  }
  &:hover {
    background-color: var(--primary-red-hovered);
  }
`;
export const ActionsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;
export const EmptryCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CartOpener = styled.div`
  display: flex;
  cursor: pointer;
`;
export const ShoppingCartCropWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 38px;
`;
