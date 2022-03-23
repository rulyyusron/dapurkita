import styled from "styled-components";

export const Container = styled.div`
    padding:10px 50px;
    background-color:#D4E2D4;
    display:flex;
    align-items:center;
    justify-content: space-between;
`
export const Left = styled.div`
    display:flex;
    align-items:center;
`

export const List = styled.ul`
    display:flex;
    align-items:center;
`
export const Items = styled.li`
    list-style:none;
    margin-right:20px;
`
export const Href = styled.a`
    text-decoration: none;
    color: #303030;
    font-size:13px;
`

export const Right = styled.div`
    display:flex;
    align-items:center;

`
export const Download = styled.span`
    font-size:13px;
    margin-right:20px;
`
export const Language = styled.div`
    font-size:13px;
`

export const Line = styled.div`
    width:2px;
    height:20px;
    background-color:#ababab;
    margin-right:20px;
`
export const Select = styled.select`
    margin-left:20px;
    height:25px;
    border:none;
    border:1px solid #057B26;
    font-size:12px;
    outline:none;
    box-shadow:1px 1px 2px rgba(0,0,0,0.2);
    border-radius:5px;
`
export const Option = styled.option`
    border:none;
`
