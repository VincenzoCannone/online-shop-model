import styled, { keyframes } from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  display: flex;
  /* align-items: flex-start; */
  background: var(--footer-bg);
  ${mobile({ flexDirection: "column" })}
  height: 27vh;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1`
  color: var(--font-bright);
  font-family: "Roboto", sans-serif;
  font-size: var(--footer-left-headline);
`;

export const Desc = styled.p`
  margin: 20px 0px;
  font-family: "Roboto", sans-serif;
  font-size: var(--footer-desc);
  color: var(--font-bright);
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: var(--font-bright);
  font-size: var(--footer-left-headline);
  font-family: "Roboto", sans-serif;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: var(--font-bright);
  font-family: "Roboto", sans-serif;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: var(--footer-list-item);
`;

export const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "#fff8f8" })};
  padding: 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: var(--footer-contact-item);
  color: var(--font-bright);
`;

const turnIt = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);
`;

export const Payment = styled.img`
  width: 50%;
  transition: all 5s ease;
  &:hover {
    animation-name: ${turnIt};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
`;
