import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  width: 100%;

  /* @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  } */
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
  /* align-items: center; */
  text-align: center;
  gap: 12px;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  background-color: #fafafa;

  @media (min-width: 768px) {
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    align-items: center;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; */
  }
`;
