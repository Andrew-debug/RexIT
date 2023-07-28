import { styled } from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.5);

  a:nth-child(1) {
    border-bottom: 2px solid var(--primary-red);
  }
  a {
    font-weight: 500;
    font-size: 14px;
    margin: 0 32px;
    padding: 32px 0;
    color: var(--white-text);
    text-decoration: none;
    text-transform: uppercase;
  }
`;
