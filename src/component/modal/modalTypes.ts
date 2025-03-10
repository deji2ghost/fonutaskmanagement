import { JSX } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  content: string | JSX.Element;
  footer: string | JSX.Element;
}