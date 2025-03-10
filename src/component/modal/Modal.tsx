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
  return (
    <>
      {isOpen && (
        <Overlay onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Header>
              <h3>{header}</h3>
              <CloseButton onClick={onClose}>
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
