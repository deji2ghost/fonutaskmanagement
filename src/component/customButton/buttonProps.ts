import { JSX } from "react";

export interface ButtonProps {
    bgColor?: string;
    textColor?: string;
    size?: "small" | "medium" | "large";
    width?: string
}

export interface MainButtonProps {
    onClick: () => void;
    text: string | JSX.Element;
    width?: string, 
    bgColor?: string, 
    textColor?: string
}