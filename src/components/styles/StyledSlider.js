import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
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
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 20px 0 60px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  width: 70%;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  flex: 1; //! follow the main axis (if we choose flex dir column the element will resize in height).
  padding: 0px;
  margin-top: -10%;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #a89494;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; // position absolute refers to relative position ( Container)
  // An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
  //lets check
  top: 0; // in order to use margin: auto to center verticaly
  bottom: 0; // in order to use margin: auto to center verticaly
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto; // need a width to work properly
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
