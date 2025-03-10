import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
`;

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const NoTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 12px;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  background-color: #fafafa;
  min-height: 100vh;

  @media (min-width: 768px) {
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;
