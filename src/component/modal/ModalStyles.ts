import styled from "styled-components";

// Modal background overlay
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Modal container (Responsive)
export const ModalContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: slideUp 0.3s ease-in-out;

  @media (min-width: 768px) {
    max-width: 600px; /* Tablet */
  }

  @media (min-width: 1024px) {
    max-width: 700px; /* Desktop */
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Modal header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #007bff;
  color: white;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

// Close button (Larger touch area for mobile)
export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 8px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 12px;
  }
`;

// Modal content
export const Content = styled.div`
  padding: 20px;
  font-size: 16px;
  color: #333;

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px;
  }
`;

// Modal footer
export const Footer = styled.div`
  padding: 15px 20px;
  background: #f1f1f1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
