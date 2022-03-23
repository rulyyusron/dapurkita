import React from 'react'
import styled from 'styled-components';
import './style.css';
const data = [
    {id: 1, link: "#", title: "Sayur-Sayuran"},
    {id: 2, link: "#", title: "Buah - buahan"},
    {id: 3, link: "#", title: "Daging ayam"},
    {id: 4, link: "#", title: "Ikan Segar"},
    {id: 5, link: "#", title: "Bumbu Dapur"},
    {id: 6, link: "#", title: "Buah Favorite"},
    {id: 7, link: "#", title: "Sayur Segar"},
    {id: 8, link: "#", title: "Rempah - rempah"},
    {id: 9, link: "#", title: "Biji - bijian"},
    {id: 10, link: "#", title: "Telur"},
]
const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 .5px 1px rgba(0,0,0,0.4);
    border-radius:5px;
    display:none;
`

const List = styled.ul`
    padding:0;

`
const Item = styled.li`
    list-style:none;
    padding:10px 100px 10px 20px;
    &:hover {
        background-color:#F9F9F9;
        font-weight:600;
    }
`
const Link = styled.a`
    text-decoration:none;
    font-size:12px;
    color:#303030;

`
const Kategori = () => {
  return (
    <Container>
        <List>
            {data.map((d) => (
                <Item key={d.id}><Link href={d.link}>{d.title}</Link></Item>
            ))}
        </List>
    </Container>
  )
}

export default Kategori