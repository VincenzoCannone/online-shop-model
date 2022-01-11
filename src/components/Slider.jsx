import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { Container, Wrapper, Slide, ImgContainer, Image, Title, Desc, Button, InfoContainer, Arrow } from './styles/StyledSlider';

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
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
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
