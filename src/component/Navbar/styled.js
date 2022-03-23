import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #F4FFF7;
    position:relative;
`
export const Logo = styled.h2`
    flex:1;
    font-family: 'Fredoka', sans-serif;
    color: #057B26;
    font-size: 34px;
    
`
export const ContainerList = styled.div`

    position:absolute;
    top:55px;
`
export const Kategori = styled.div`
    position:absolute;
    left:250px;
    width:250px; 
 `
 export const Title = styled.span`
    font-size:13px;
    cursor:pointer;
    font-weight:600;
 `
export const Search = styled.div`
    position:absolute;
    left:400px;
    width:40%;
    border:1px solid #DDDDDD;
    margin-left:100px;
    display:flex;
    align-items:center;
    height:40px;
    border-radius:50px;
    overflow:hidden;
    
    
`
export const Input = styled.input`
    height:100%;
    border:none;
    outline:none;
    padding-left:20px;
    width:95%;
`
export const Icons = styled.div`
    width:5%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    border:1px solid #057B26;
    background-color:#057B26;
    color:#fff;
    font-weight:bold;
    border-radius:50%;
    cursor:pointer;

`
export const Cart = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#303030;
    margin-right:20px;
    color:#fff;
`
export const Line = styled.div`
width:2px;
    height:20px;
    background-color:#ababab;
    margin-right:20px;`
export const Login = styled.div`
    border:1px solid #057B26;
    padding:5px 30px;
    cursor:pointer;
    background-color:#057B26;
    border-radius:40px;
`
export const Link = styled.a`
    color:#fff;
    font-size:13px;
    font-weight:500;
    text-decoration:none;
`