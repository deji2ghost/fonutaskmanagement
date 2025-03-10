import { JSX } from "react";

export interface ButtonProps {
    $bgColor?: string;
    $textColor?: string;
    $size?: "small" | "medium" | "large";
    $width?: string,
    $border?: string 
    $justify?: string
}

export interface MainButtonProps {
    onClick: () => void;
    text: string | JSX.Element;
    width?: string, 
    bgColor?: string, 
    textColor?: string,
    dropdown?: boolean,
    icon?: JSX.Element,
    border?: string,
    justify?: string
}