import styled from "styled-components";

export const TaskCard = styled.div<{ $completed?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardBackground};
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  border-bottom: ${({$completed, theme}) => ($completed ? `1px solid ${theme.colors.completed}` : `1px solid ${theme.colors.active}`)};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  gap: 5px;
  flex-grow: 1;
`;

export const StatusWrapper = styled.div<{ $completed?: boolean }>`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  height: 30px;
  justify-content: space-between;
  width: 45%;
  padding: 10px 9px !important; 
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;
  border: ${({$completed, theme}) => ($completed ? `1px solid ${theme.colors.completed}` : `1px solid ${theme.colors.active}`)};
  transition: border-color 0.3s ease, background-color 0.3s ease;

  @media (min-width: 768px) {
    width: 35%;
    padding: 0 10px;
  }

  @media (min-width: 1024px) {
    width: 38%;
    padding: 0 10px;
  }
`;

export const StatusDot = styled.span<{ $completed?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({$completed, theme}) => ($completed ? theme.colors.completed : theme.colors.active)};
  box-shadow: 0 0 8px ${({$completed, theme}) => ($completed ? theme.colors.completed : theme.colors.active)};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

export const StatusText = styled.p<{ $completed?: boolean }>`
  color: ${({$completed, theme}) => ($completed ? theme.colors.completed : theme.colors.active)};
  transition: color 0.3s ease; 
`;

export const Title = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.description};
  text-align: center;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconButton = styled.button<{ color: string }>`
  background: none;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  border: none;
  cursor: pointer;
  color: ${({ color }) => color};
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  svg {
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.1);
    color: ${({ color }) => color + "AA"};
  }
`;
