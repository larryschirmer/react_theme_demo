import styled from "styled-components";
import { theme } from "../../utils/style";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${theme("colors.background")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme("colors.textColor")};

  div {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  button {
    width: 30rem;
    height: 6rem;
    border: none;
    background: ${theme('colors.buttonBackground')};
    border-radius: 4px;
    font-size: 2.1rem;
    color: ${theme('colors.buttonColor')};
    &:hover {
      background: ${theme('colors.buttonBackgroundHover')};
      color: ${theme('colors.buttonColorHover')};
    }
  }
`;
