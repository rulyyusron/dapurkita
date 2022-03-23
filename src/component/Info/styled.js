import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;
margin:50px auto 0;
position:relative;
overflow:hidden;
display:flex;


`;
export const Arrow = styled.div`
width:40px;
height:40px;
background-color:#D4E2D4;
border-radius:50%;
display:flex;
justify-content: center;
align-items:center;
border:1px solid #D4E2D4;
position:absolute;
margin:auto;
top:0;
bottom:0;
left:${props => props.direction ==="left" && "10px"};
right:${props => props.direction ==="right" && "10px"};
cursor:pointer;
opacity: 0.5;
z-index:3;
`

export const Wrapper = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    transition: all 1.5s ease;
    transform:translateX(${props => props.sliderIndex * -100}vw);
     padding:50px;
    `


export const Slide = styled.div`
    width:100vw;
    height: 80vh;    
display:flex;
    align-items:center;
    background-color: #${props => props.bg};
   
`;
export const ImgContainer = styled.div`
height:100%;
    flex:1;
`;
export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

export const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
export const Title = styled.h1`
    font-size: 65px;
    text-transform: uppercase;
`
export const Desc = styled.p`
    margin:50px 0px;
    font-size: 30px;
    font-weight: bold;
`
export const Button = styled.button`
    padding: 20px 30px;
    border:none;
    background-color: #019267;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    border-radius:3px;
`



