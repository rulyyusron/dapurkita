import React, { useState, useEffect} from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  Title,
  Description,
  Button,

} from "./styled";
// import img1 from './assets/img-1.jpg';
import { sliderItems } from "./data";

const Slider = () => {
  const autoScrol = true;
  let slideInterval;
  let intervalTime = 5000;

  const [sliderIndex, setSliderIndex] = useState(0);

  function autoplay() {
    slideInterval = setInterval(handleClick, intervalTime);
  }

  useEffect(() => {
    if (autoScrol) {
      autoplay();
    }
    return () => clearInterval(slideInterval);
  }, [sliderIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <>
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoMdArrowDropleft />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>Belanja Sekarang</Button>
              <Image src={item.image} />
            </ImgContainer>
            {/* <InfoContainer>
    
</InfoContainer> */}
          </Slide>

          
        ))}


      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoMdArrowDropright />
      </Arrow>
      
    </Container>
    {/* <DotsContainer>
        <Dots/>
        <Dots/>
        <Dots/>
        <Dots/>
        <Dots/>
      </DotsContainer> */}
    </>
  );
};

export default Slider;
