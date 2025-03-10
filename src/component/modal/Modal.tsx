import React from "react";
import { ModalProps } from "./modalTypes";
import { IoClose } from "react-icons/io5";
import {
  CloseButton,
  Content,
  Footer,
  Header,
  ModalContainer,
  Overlay,
} from "./ModalStyles";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  content,
  footer,
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <Overlay data-testid="modal-overlay" onClick={handleOverlayClick}>
          <ModalContainer data-testid="modal-container" >
            <Header>
              <h3>{header}</h3>
              <CloseButton onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}>
                <IoClose size={24} />
              </CloseButton>
            </Header>
            <Content>{content}</Content>
            <Footer>{footer}</Footer>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
