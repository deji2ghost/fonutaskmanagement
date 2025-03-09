import styled from "styled-components";
import { ButtonProps } from "./buttonProps";

// Styled Button Component
export const ButtonContainer = styled.div`
  display: inline-block;
  border-radius: 8px;
`;

export const Button = styled.button<ButtonProps>`
  padding: 11px 27px;
  font-size: 16px;
  font-weight: bold;
  border: ${({ border }) => border || "none"};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background: ${({ bgColor }) => bgColor || "#633CFF"};
  color: ${({ textColor }) => textColor || "#ffffff"};
  width: ${({ width }) => width || "100%"};

  &:hover {
    opacity: 0.8;
  }
`;
