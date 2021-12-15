import { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  //lets check
  top: 0;
  bottom: 0; //? why not left: 0?
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto; // need a width to work properly
  overflow: hidden; 
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg}; // The # is to start the hex-color-code.
`;

const ImgContainer = styled.div`
  flex: 1; // shorthand for flex-grow/-shrink/-basis. Flex:1 here and for info to apply the same size.
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  Letter-spacing: 3px;
`;
const Button = styled.button`
  padding:10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  flex: 1; //! follow the main axis (if we choose flex dir column the element will resize in height).
  padding: 50px;
`;

const Arrow = styled.div`
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

// ?why round braces after return?
// !<ArrowLeftOutlined> is an icon
//! we refer to the public folder!! (<Image/>)

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); // We start at index 0 (Slide 1) and as the left arrow is clicked and „slideIndex“ ist greater than 0 „setSlideIndex“ will decrease „slideIndex“ by one. Otherwise i will set it to 2 (slide3).
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>

        {sliderItems.map((item) => (

          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>

        ))}

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right)")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
