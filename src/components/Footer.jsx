import { Container, Left, Logo, Desc, SocialContainer, SocialIcon, Center, Title, List, ListItem, Right, ContactItem, Payment } from './styles/StyledFooter'
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DressYourMind</Logo>
        <Desc>Dressyourmind Eyewear is more than a brand.<br />We offer the best retro classic and vintage sunglasses. Made in Berlin. Inspired by the most popular Italian frame designs from the ’60s, the ’70s, 80’s and ’90s.</Desc>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track your Order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />Infinite Loop Cupertino, CA 95014
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />+900 123 123 133
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />mail@applesecrets.com
        </ContactItem>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
