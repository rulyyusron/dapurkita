import React from 'react'

import { Action, BuyBtn, CardBox, CartBtn, Container,Header, Image, InfoContainer, Price, SubTitle, Title, TitleProduk, Wrapper} from './styled'
import img1 from '../../assets/img-1.jpg'
import img2 from '../../assets/img-2.jpg'
import img3 from '../../assets/img-3.jpg'
import img4 from '../../assets/img-4.jpg'
import img5 from '../../assets/img-5.jpg'


const Produk = () => {

  return (
    <Container>
      <Title>Aneka Sayur</Title>
      <SubTitle>Sayur sehat dan segar</SubTitle>
      <Wrapper>
   
          <CardBox>
          
            <Header>Harga Petani</Header>
            <Image src={img1} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran / rempah - rempah/bumbu dapur</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img2} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img2} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img2} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img2} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img2} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img3} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img4} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
          <Header>Harga Petani</Header>
            <Image src={img4} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          <CardBox>
            <Header>Harga Petani</Header>
            <Image src={img5} alt=""/>
            <InfoContainer>
              <TitleProduk>Sayuran</TitleProduk>
              <Price>Rp. 15.000</Price>
            </InfoContainer>
              <Action>
                <BuyBtn>Beli</BuyBtn>
                <CartBtn>Keranjang</CartBtn>
              </Action>
          </CardBox>
          
       
      </Wrapper>
    </Container>
  )
}

export default Produk