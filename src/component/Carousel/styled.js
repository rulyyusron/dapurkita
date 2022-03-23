import styled from "styled-components";
export const Container = styled.div`
    height: 100vh;
    padding:100px 50px;
    background-color: rgb(227, 228, 228);
     `
export const Wrapper = styled.div`
    max-width: 100%;
    height: 70vh;
    position: relative;
    overflow:hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    margin:50px auto;
    border-radius:15px;
    
`

export const Header = styled.h1`
    font-size: 28px;
`
export const SubHeader = styled.h3`
    font-size: 20px;
    color:gray;
`

export const Title = styled.h1`
    font-size: 80px;
    color: #ffffff;
    font-weight:600;
    position: absolute;
    top:15%;
    left: 100px;
    right:100px;
`
export const SubTitle = styled.h3`
    font-size: 25px;
    color: #ffffff;
    font-weight:600;
    position:absolute;
    left: 100px;
    top:60%;
`

export const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
`

export const BtnAction = styled.a`
    width:250px;
    height: 70px;
    background-color: green;
    border-radius:5px;
    position:absolute;
    left: 100px;
    bottom: 100px;
    font-size: 20px;
    font-weight:600;
    text-transform: uppercase;
    color: #fff;
    border:none;
    display:flex;
    align-items:center;
    justify-content: center;
    cursor:pointer;
`
