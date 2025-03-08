import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  /* width: 100%; */
  /* max-width: 100vw; */
  overflow-x: hidden;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px;
  min-height: 100vh;
  /* width: 100%; */
  background: #FFFFFF;
  border-radius: 12px;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 15px;
  }
`;
