import { styled } from "styled-components";

export const CartItemWrap = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #4d4d4d33;
`;

export const SeedImageWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemValuesWrap = styled.div`
  display: flex;
  gap: 24px;
  padding: 10px 0;
  button {
    all: unset;
    cursor: pointer;
  }
`;
export const CropValuesWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 24px;
  font-size: 16px;
`;
export const CropValue = styled.div`
  width: 32px;
  height: 24px;
  color: var(--primary-red);
  font-weight: 400;
`;
export const ItemWeight = styled.div`
  font-weight: 400;
  text-transform: lowercase;
`;
export const ItemPrice = styled.div`
  font-weight: 400;
`;
