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
        <Logo>FALKACITY.</Logo>
        <Desc>BALBLBLLFLAFLALFLAFLAFLAL</Desc>
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
      </Left>
      <Center>
        <Title>Usefull LInks</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Falk</ListItem>
          <ListItem>Falk</ListItem>
          <ListItem>Falk</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track your Order</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Infinite Loop Cupertino, CA
          95014
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +900 123 123 133
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          mail@applesecrets.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
