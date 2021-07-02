import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faFeather, faAddressCard, faXRay } from '@fortawesome/free-solid-svg-icons'

//* Styled-componet

const ContainerElemt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dcdde1;
  margin: 3px;
    p{
      padding: 10px;
    }
`;

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dcdde1;
  margin: 3px;
  margin-top: 140px;
  align-items: stretch;

`;

const Nav = styled.nav`

  background: #273c75;
  position: absolute;
  top: 0;
  right: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  h1{
font-family: 'Kanit', sans-serif;
  font-size: 25px;
  color: #f5f6fa;
}
  div a{
    text-decoration: none;
    color: #f5f6fa;
    margin: 10px ;
    font-size: 15px;
  }
  div a.active{
    border-bottom: #40739e solid 5px;
  }
`;

const PP = styled.p`
  margin: 0px;
  text-indent: 3ch;
`;

const Footer = styled.div`
 background: #273c75;
 display: flex;
 height: auto;
 color: black; 
 align-items: center;
 flex-direction: column;

 footer{
   background-color: white;
   width: 100%;
   height: auto;
   display: flex;
  align-items: flex-end;
  justify-content: center;
 }
 .Footer{
   margin: 20px 0px 10px 0px;
   font-size: 24px;
   color: white;
 }
 svg{
   margin: 0px 5px;
 }
`;
//*  Component React Footer
const FooterComponent = () => {
  return <Footer>
    <div className="Footer">
      <FontAwesomeIcon icon={faAddressBook} />
      <FontAwesomeIcon icon={faFeather} />
      <FontAwesomeIcon icon={faAddressCard} />
      <FontAwesomeIcon icon={faXRay} />

    </div>
    <footer>
      Blog de Prueba 2021 Copyright © Todos los derechos reservados
    </footer>

  </Footer>
}


export { Container, ContainerElemt, Nav, PP, FooterComponent };