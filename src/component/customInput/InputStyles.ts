import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

`;

export const InputComponent = styled.input`
    padding: 12px 16px;
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    outline: none;
    border-radius: 8px;
`