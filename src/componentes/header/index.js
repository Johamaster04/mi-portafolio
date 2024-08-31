import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import styled from "styled-components";

// Estilos del Header
const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #212529;

  @media (max-width: 480px) {
    text-align: center;
    flex-direction: column;
  }
`;

// Estilos del logo
const Logo = styled.img`
  width: 90.16px;
  height: 66px;

  @media (max-width: 480px) {
    /* display: none; */
  }
`;

// Estilos de la navegación con comportamiento de acordeón
const Navegacion = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    display: flex;
    height: ${(props) => (props.isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

// Estilos del enlace
export const Enlace = styled.a`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: white;
  text-decoration: none;
  margin: 2rem 1.5rem;

  &:hover {
    color: cornflowerblue;
  }

  @media (max-width: 480px) {
    
  }
`;

// Estilos del enlace especial
const EnlaceEspecial = styled(Enlace)`
  position: static;
  color: #ffb742;
`;

// Estilos del botón
export const Boton = styled.a`
  font-weight: 700;
  background-color: #ffb742;
  border-radius: 28px;
  border: none;
  padding: 12px 26px;
  cursor: pointer;
  color: black;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    background-color: #db8f14;
    color: white;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

// Estilos del botón del acordeón
const MenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 480px) {
    display: block;
  }
`;

// Componente Header con el acordeón
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyle id="inicio">
      <a href="/#">
        <Logo src={logo} alt="Logo Johansen" />
      </a>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰ {/* Icono del menú (hamburguesa) */}
      </MenuButton>
      <Navegacion isOpen={isOpen}>
        <EnlaceEspecial href="/#inicio">Inicio</EnlaceEspecial>
        <Enlace href="/#acerca-de-mi">Acerca de mí</Enlace>
        <Enlace href="/#descripcion">Habilidades</Enlace>
        <Enlace href="/#proyectos">Proyectos</Enlace>
      </Navegacion>
      <Boton href="mailto:Johan.aguero@hotmail.com?Subject=Interesado%20en%20contratar%20tus%20servicios">
        Contrátame
      </Boton>
    </HeaderStyle>
  );
};

export default Header;
