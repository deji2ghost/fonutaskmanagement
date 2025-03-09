import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  overflow-x: hidden;
`

export const CustomInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ErrorTag = styled.p`
  color: red;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px;
  min-height: 100vh;
  background: #FFFFFF;
  border-radius: 12px;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 15px;
  }
`;
