import styled from "styled-components";
import { mobile } from "../../responsive";
import { keepItNarrow } from "../../bigscreenbreakpoint";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: var(--container-width);
  height: 80vh;

  ${mobile({ display: "none" })}

  ${keepItNarrow()}
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg}; // The # is to start the hex-color-code.
`;

export const ImgContainer = styled.div`
  flex: 1; // shorthand for flex-grow/-shrink/-basis. Flex:1 here and for info to apply the same size.
  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
`;

export const Title = styled.h1`
  font-size: var(--slider-title);
`;

export const Desc = styled.p`
  width: 70%;
  margin: 2rem 0 6rem;
  font-size: var(--slider-desc);
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: var(--slider-button);
  background-color: var(--body-bg);
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  flex: 1; //! follows the main axis (in cross axis (flex dir column) the element will resize in height).
  padding: 0px;
  margin-top: -10%;
`;

export const Arrow = styled.div`
  display: flex;
  z-index: 2;
  align-items: center;
  justify-content: center;
  position: absolute; // position absolute refers to relative position ( Container)
  // An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
  //lets check
  top: 0; // in order to use margin: auto to center verticaly
  bottom: 0; // in order to use margin: auto to center verticaly
  left: ${(props) => props.direction === "left" && "1rem"};
  right: ${(props) => props.direction === "right" && "1rem"};
  margin: auto; // need a width to work properly
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  opacity: 0.5;
  background-color: var(--body-bg);
`;
