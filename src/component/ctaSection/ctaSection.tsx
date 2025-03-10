import {
  ButtonWrapper,
  Container,
  CtaHeader,
  CtaParagraph,
  HeadContainer,
} from "./ctaSectionStyle";
import { CtaProps } from "./CtaTypes";

const CtaSection: React.FC<CtaProps> = ({ header, paragraph, footer }) => {
  return (
    <Container>
      <HeadContainer>
        <CtaHeader>{header}</CtaHeader>
        <CtaParagraph>{paragraph}</CtaParagraph>
      </HeadContainer>
      <ButtonWrapper>{footer}</ButtonWrapper>
    </Container>
  );
};

export default CtaSection;
