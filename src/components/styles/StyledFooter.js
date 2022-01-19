import styled, { keyframes } from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  display: flex;
  min-height: 10rem;
  background: var(--footer-bg);

  ${mobile({ flexDirection: "column" })}
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
`;

export const Logo = styled.h1`
  color: var(--font-bright);
  font-family: "Roboto", sans-serif;
  font-size: var(--footer-left-headline);
`;

export const Desc = styled.p`
  margin: 2rem 0;
  color: var(--font-bright);
  font-family: "Roboto", sans-serif;
  font-size: var(--footer-desc);
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
`;

export const Center = styled.div`
  flex: 1;
  padding: 2rem;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
  color: var(--font-bright);
  font-size: var(--footer-left-headline);
  font-family: "Roboto", sans-serif;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--font-bright);
  font-family: "Roboto", sans-serif;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
  font-size: var(--footer-list-item);
`;

export const Right = styled.div`
  padding: 2rem;
  flex: 1;
  /* ${mobile({})}; */
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: var(--font-bright);
  font-size: var(--footer-contact-item);
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
