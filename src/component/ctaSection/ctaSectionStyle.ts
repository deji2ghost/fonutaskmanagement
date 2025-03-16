import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    align-items: start;
    width: 100%;
    gap: 16px;
  }

  @media (min-width: 1024px) {
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CtaHeader = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  @media (min-width: 768px) {
    width: 15%;
  }
`;

export const CtaParagraph = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
`;