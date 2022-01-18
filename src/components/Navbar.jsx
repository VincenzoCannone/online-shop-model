import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Container, Wrapper, Left, Language, SearchContainer, Input, Logo, Center, Right, MenuItem } from './styles/StyledNavbar';
// import { green } from "@material-ui/core/colors";

//! Badge number (4) we cant scale it 'badgeContent={4}'

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "1.6rem" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DressYourMind</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>
            <Badge color="primary">
              <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default navbar;
