import styled from "styled-components";
import { ButtonProps } from "./buttonProps";

// Styled Button Component
export const ButtonContainer = styled.div`
  display: inline-block;
  border-radius: 8px;
`;

export const Button = styled.button<ButtonProps>`
  padding: 11px 27px;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "center"};;
  font-size: 16px;
  font-weight: bold;
  border: ${({ border }) => border || "none"};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background: ${({ bgColor }) => bgColor || "#633CFF"};
  color: ${({ textColor }) => textColor || "#ffffff"};
  width: ${({ width }) => width || "100%"};

  svg {
    font-size: 1.5rem; /* Adjust the icon size */
  }

  &:hover {
    opacity: 0.8;
  }
`;
