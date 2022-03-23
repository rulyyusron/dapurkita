import styled from "styled-components";

export const Container = styled.div`
    height:100vh;
    
`
export const TitleContainer = styled.h1`
    padding:50px 0 20px 50px;

`
export const Wrapper = styled.div`

    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    align-items:center;
    justify-content:space-between;
    margin:20px 50px;
   
`
export const Card = styled.div`
    border:1px solid #B7CADB;
    background-color:#fff;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    box-shadow: 1px 2px 2px rgba(0,0,0,0.25);
    border-radius:5px;
    overflow:hidden;
    margin-right:20px;
    margin-bottom:20px;
    cursor:pointer;
    
   &:hover {
        background-color: #EFFFFD;
   }
   

`
export const ImgContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
     margin-bottom:20px;
`
export const Image = styled.img`
    width: 60%;


`
export const CardContainer = styled.div`
    text-align:center;
    margin-bottom:20px;
    margin-top:20px;
   
`
export const Title = styled.a`
    font-size:24px;
    font-weight:bold;
`
