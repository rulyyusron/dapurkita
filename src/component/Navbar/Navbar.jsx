import React, { useState } from 'react'
import {BiSearchAlt} from 'react-icons/bi';
import {FaShoppingCart} from 'react-icons/fa';
// import {MdKeyboardArrowRight} from 'react-icons/md'
import { Container, Logo, ContainerList, Kategori, Search, Cart, Line, Login, Input , Title, Icons, Link} from './styled';
import ListKategori from './Kategori';
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
        <Logo>DapurKita</Logo>
        <Kategori>
            <Title onClick={() => setIsMenuOpen(!isMenuOpen)}>Kategori</Title>

            <ContainerList>
                <ListKategori/>
            </ContainerList>
        </Kategori>
        <Search>
            <Input type="text" placeholder="Pencarian" />
            <Icons><BiSearchAlt/></Icons>
        </Search>
        <Cart>
            <FaShoppingCart/>
        </Cart>
        <Line></Line>
        <Login>
            <Link href="">Login</Link>
        </Login>
    </Container>
  )
}

export default Navbar