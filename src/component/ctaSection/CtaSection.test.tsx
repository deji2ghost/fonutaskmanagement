import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import CtaSection from "./ctaSection";
import CustomButton from "../customButton/customButton";


describe("CtaSection Component", () => {
  test("renders the header text", () => {
    render(<CtaSection header="Test Header" paragraph="Test Paragraph" footer={<></>} />);
    
    expect(screen.getByText("Test Header")).toBeInTheDocument();
  });

  test("renders the paragraph text", () => {
    render(<CtaSection header="Test Header" paragraph="Test Paragraph" footer={<div />} />);
    
    expect(screen.getByText("Test Paragraph")).toBeInTheDocument();
  });

  test("renders the footer content", () => {
    render(
      <CtaSection 
        header="Test Header" 
        paragraph="Test Paragraph" 
        footer={<CustomButton text="Click Me" onClick={() => {}} />} 
      />
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
