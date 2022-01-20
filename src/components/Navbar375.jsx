import React, { useState } from "react";
import { Container, Wrapper, Left, Logo, Right, Menue, MenueContainer, Circle, MenueClose, List, Link } from './styles/StyledNavbar375';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

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
                    <Circle isOpen={isOpen}>
                        <MenueClose isOpen={isOpen} onClick={toggleIt}>X</MenueClose>
                    </Circle>

                    <MenueContainer>
                        <ul>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>Home</Link></List>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>Login</Link></List>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>Register</Link></List>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>About Us</Link></List>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>Products</Link></List>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>Search</Link></List>
                            <List><Link href="#" isOpen={isOpen} onClick={toggleIt}>Cart</Link></List>
                        </ul>
                    </MenueContainer>

                </Menue>


            </Wrapper>
        </Container>
    );
};

export default Navbar;
