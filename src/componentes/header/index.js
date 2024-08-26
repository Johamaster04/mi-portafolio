import logo from "../../assets/img/logo.svg"
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #212529;
`;

const Logo = styled.img`
    width: 90.16px;
    height: 66px;
`
const Navegacion = styled.nav`
 
`
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
`;

const EnlaceEspecial = styled(Enlace)`
position: static;
    color: #ffb742;
`

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

    &:hover{
        background-color: #db8f14;
        color: white;
    }
`

const Header = () => {
  return (
    <HeaderStyle id="inicio">
      <a href="/#">
        <Logo src={logo} alt="Logo Johansen" />
      </a>
      <Navegacion>
        <EnlaceEspecial href="/#inicio">Inicio</EnlaceEspecial>
        <Enlace href="/#acerca-de-mi">Acerca de mi</Enlace>
        <Enlace href="/#descripcion">Habilidades</Enlace>
        <Enlace href="/#proyectos">Proyectos</Enlace>
      </Navegacion>
      <Boton href="mailto:Johan.aguero@hotmail.com?Subject=Interesado%20en%20en%20contratar%20tus%20servicios">
        Contratame
      </Boton>
    </HeaderStyle>
  );
};

export default Header