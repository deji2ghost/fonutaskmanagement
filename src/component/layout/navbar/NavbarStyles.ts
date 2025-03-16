import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  gap: 5px;
  padding: 0px 24px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavHead = styled.h1`


  @media (min-width: 768px) {
  
  }
`;