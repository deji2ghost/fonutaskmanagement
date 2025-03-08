import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border: 1px solid grey;

  @media (min-width: 768px) {
    /* Tablet View */
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
  }

  @media (min-width: 1024px) {
    /* Desktop View */
    padding: 20px 40px;
  }
`;