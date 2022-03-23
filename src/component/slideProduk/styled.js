import styled from "styled-components";

export const Container = styled.div`
  padding-top:50px;
  padding-bottom: 100px;
 
`;
export const Title = styled.h1`
  font-size: 30px;
  margin-left:50px;
`;
export const SubTitle = styled.h3`
  color: gray;
  margin-bottom:30px;
  margin-left:50px;
`;
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-items:center;
    justify-content:space-between;
    margin:20px 50px;
`;

export const CardBox = styled.div`
  border: 1px solid #b7cadb;
  background-color: #fff;
  display: flex;
  height: 400px;
  flex-direction: column;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
    position:relative;
    margin-right:20px;
    margin-bottom:20px;
  cursor: pointer;
  overflow:hidden;
`;
export const Header = styled.div`
width:50%;
   position: absolute;
   top:0;
   border:1px solid #FF5403;
   background-color: #FF5403;
   border-bottom-right-radius: 20px;
   padding:10px;
   text-align:center;
   color: white;
   font-weight: 500;
   opacity: 0.7;
`
export const Image = styled.img`
  width: 100%;
  border-radius:5px;
`;
export const InfoContainer = styled.div`
    padding: 20px;
`;
export const TitleProduk = styled.a`
    font-size: 16px;
    color:gray;
`;
export const Price = styled.h3`
font-size:22px;
    color: #CD1818;
`;
export const Action = styled.div`
    position:absolute;
    bottom:0;
    width:100%;
`;
export const CartBtn = styled.button`
    width:50%;
    padding: 15px;
    border:none;
    background-color:#FF8E00;
    font-size: 15px;
    font-weight: 600;
    color: white;
`;
export const BuyBtn = styled.button`
    width:50%;
    padding: 15px;
    border:none;
    background-color: #3E8E7E;
    color: white;
    font-size: 15px;
    font-weight: 600;
`;
