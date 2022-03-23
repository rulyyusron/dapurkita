import React, {useState, useEffect} from 'react'
import { Container,Wrapper, Image, Title, SubTitle,Header, SubHeader, BtnAction} from './styled'
import { dataSlider } from './data'
import ButtonSlider from '../UI/ButtonSlider'
import './style.css';

const Carousel = () => {

    const autoScrol = true;
    let slideInterval;
    let intervalTime = 5000;

    const [slideIndex, setSlideIndex] = useState(1);

    function autoplay() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    
      useEffect(() => {
        if (autoScrol) {
          autoplay();
        }
        return () => clearInterval(slideInterval);
      }, [slideIndex]);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDots = (index) => {
        setSlideIndex(index)
    }

  return (
    <Container>
        <Header>Rekomendasi untuk kamu</Header>
        <SubHeader>Rekomendasi terbaik untuk kamu dari kami</SubHeader>
        <Wrapper>

       
        {dataSlider.map((obj, index) => {
            return (

                <div key={obj.id} className={slideIndex === index + 1 ? "slide active" : "slide"}>

                    <Title>Belanja Semakin mudah, Masak semakin meriah</Title>
                    <SubTitle>Ada rekomendasi terbaik untukmu</SubTitle>
                    <Image src={process.env.PUBLIC_URL + `/img/img${index + 1}.jpg`}/>
                    <BtnAction>Belanja Sekarang</BtnAction>
                </div>

            )
        })}

        <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
        <ButtonSlider moveSlide={nextSlide} direction={"next"}/>

        <div className='container-dots'>
            {Array.from(
                {length: 4}
            ).map((item, index) => (
                <div onClick={() => moveDots(index + 1)} className={slideIndex === index + 1 ? "dots active-dot" : "dots"}></div>
            ))}
        </div>
        </Wrapper>

        


        
    </Container>
  )
}

export default Carousel