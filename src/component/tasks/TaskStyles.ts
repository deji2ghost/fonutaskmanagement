import styled from "styled-components";

// Task Card Container
export const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FAFAFA;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

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

// Task Content (Title + Description)
export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
`;

// Status Dot (Green for completed, Orange for pending)
export const StatusDot = styled.span<{ completed: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ completed }) => (completed ? "green" : "orange")};
  box-shadow: 0 0 8px ${({ completed }) => (completed ? "green" : "orange")};
`;

// Title Styling
export const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

// Description Styling
export const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
`;

// Task Actions Container
export const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

// Icon Button (Delete & Edit)
export const IconButton = styled.button<{ color: string }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ color }) => color};
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${({ color }) => color + "AA"}; /* Slight opacity change */
  }
`;
