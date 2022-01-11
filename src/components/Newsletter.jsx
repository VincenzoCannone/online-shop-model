import { Send } from "@material-ui/icons";
import { Container, Title, Desc, InputContainer, Input, Button } from './styles/StyledNewsletter';

const Newsletter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>Get your latest arrivals and discounts</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
