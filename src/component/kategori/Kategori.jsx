import React from 'react';
import { Card, Container, Title, Wrapper, Image, TitleContainer, CardContainer, ImgContainer } from './styled';
import img1 from '../../assets/icon-categori/sayur.png';
import { dataItems } from './data';


const Kategori = () => {
  return (
    <Container>
      <TitleContainer>Kategori</TitleContainer>
        <Wrapper>

          {dataItems.map((items, index) => (

            <Card key={items.id}>
                <ImgContainer>
                    <Image src={process.env.PUBLIC_URL + `/icon/icon${index + 1}.png`} />
                </ImgContainer>
                <CardContainer>
                  <Title>{items.title}</Title>
                </CardContainer>

            </Card>

          ))}
            
            <Card>
                <ImgContainer>
                    <Image src={img1} alt=" " />
                </ImgContainer>
                <CardContainer>
                  <Title>See All</Title>
                </CardContainer>

            </Card>
        </Wrapper>
    </Container>
  )
}

export default Kategori