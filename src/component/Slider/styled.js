import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display:flex;
    position:relative;
    overflow:hidden;
 `
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
    height:70%;
    width:100%;
    display:flex;
    align-items:center;
    transition: all 1.5s ease;
    transform:translateX(${props => props.sliderIndex * -100}vw);
    
`
export const Slide = styled.div`
    width:100vw;
    height: 70vh;
    display:flex;
    align-items:center;

 `
export const ImgContainer = styled.div`
    width:100%;
    height:80%;
    position:relative;
 

`
export const Image = styled.img`
    margin-right:50px;
    width:70vw;
    object-fit:cover;
    height:100%;
    border-radius:15px;
`
export const Title = styled.h1`
    position:absolute;
    top:150px;
    left:40px;
    color:#fff;
    font-size:5rem;
`
export const Description = styled.p`
    position:absolute;
    font-size:27px;
    top: 260px;
    left:40px;
    color:#fff;
`
export const Button = styled.button`
    position: absolute;
    top:350px;
    left:40px;
    padding:20px 50px;
    border:none;
    border:1px solid #057B26;
    background-color: #057B26;
    cursor:pointer;
    color:#fff;
    font-size:20px;
    border-radius:20px;
`
export const DotsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
   
`
export const Dots = styled.div`
    height:15px;
    width:15px;
    border-radius:50%;
    border:1px solid #057B26;
    background-color: #057B26;
    margin-right:20px;
`