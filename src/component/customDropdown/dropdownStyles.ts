import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => `1px solid ${theme.colors.cardBorder} `};
  border-radius: 6px;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;