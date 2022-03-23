import React, {useState, useEffect, useRef} from 'react'
import { Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Title, Desc, Button } from './styled';
import { dataSlider } from './itemSlider';
import {MdOutlineArrowLeft, MdOutlineArrowRight} from 'react-icons/md'

const SlideInfo = () => {

  const [sliderIndex, setSliderIndex] = useState(0);

  const autoScrol = true;
  let slideInterval;
  let intervalTime = 5000;

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
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdOutlineArrowLeft/>
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>

        {dataSlider.map((item) => (

        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
              <Image src={item.img} alt={item.title}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>Nikmati belanja sepuasnya dengan promo tiada henti dari dapur kita dengan syarat dan ketentuan berlaku</Desc>
            <Button>Belanja Sekarang</Button>
          </InfoContainer>
          
        </Slide>

        ))}
        
        
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdOutlineArrowRight/>
      </Arrow>
    </Container>
  )
}

export default SlideInfo;