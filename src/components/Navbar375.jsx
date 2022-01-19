import React, { useState } from "react";
import { Container, Wrapper, Left, Logo, Right, Menue, MenueContainer, Circle, MenueClose, List, Link } from './styles/StyledNavbar375';
import MenuIcon from '@mui/icons-material/Menu';

const navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleIt = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>DressYourMind</Logo>
                </Left>

                <Right>
                    <MenuIcon style={{ fontSize: "3rem" }} onClick={toggleIt} />
                </Right>

                <Menue isOpen={isOpen}>
                    <Circle>
                        <MenueClose onClick={toggleIt}>X</MenueClose>
                    </Circle>

                    <MenueContainer>
                        <ul>
                            <List><Link href="#" className="link">Home</Link></List>
                            <List><Link href="#" className="link">Login</Link></List>
                            <List><Link href="#" className="link">Register</Link></List>
                            <List><Link href="#" className="link">About Us</Link></List>
                            <List><Link href="#" className="link">Products</Link></List>
                            <List><Link href="#" className="link">Search</Link></List>
                            <List><Link href="#" className="link">Cart</Link></List>
                        </ul>
                    </MenueContainer>

                </Menue>


            </Wrapper>
        </Container>
    );
};

export default navbar;
