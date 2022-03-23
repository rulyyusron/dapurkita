import React from "react";
import {
  Container,
  Left,
  Right,
  List,
  Items,
  Href,
  Line,
  Select,
  Option,
  Download,

  Language
} from "./styled";

const Nav = () => {
  return (
    <Container>
      <Left>
          <List>
              <Items><Href href="#">Service</Href></Items>
              <Items><Href href="#">Mitra Tani</Href></Items>
          </List>
      </Left>
      <Right>
          <Download>Download Apps</Download>
          <Line></Line>
          <Language>
              Bahasa
              <Select>
                  <Option>IDN</Option>
                  <Option>ENG</Option>
              </Select>
          </Language>
      </Right>
    </Container>
  );
};

export default Nav;
