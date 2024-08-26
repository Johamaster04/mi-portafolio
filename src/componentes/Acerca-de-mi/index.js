import { Boton } from "../header";
import { Contenedor } from "../QuienSoy";
import Acerca from "../../assets/img/acerca-de.png";
import styled from "styled-components";

const SeccionInformacion = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const ConstenedorInfo = styled(Contenedor)`
  text-align: left;
`;
const Titulo = styled.h3`
  width: 155px;
`;

export const Info = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: white;
  margin-top: 2.9rem;
`;

const BotonInfo = styled(Boton)`
  margin-top: 30px;

  &:hover {
    background-color: #db8f14;
    color: white;
  }
`;

const Informacion = () => {
  return (
    <SeccionInformacion id="acerca-de-mi">
      <img src={Acerca} alt="Sobre Mi" />

      <ConstenedorInfo>
        <Titulo class="yo">Quien Soy</Titulo>
        <h1>Acerca De Mi</h1>
        <Info>
          ¡Hola! Soy Johansen Picado, y soy un diseñador y desarrollador
          apasionado por crear aplicaciones web limpias con una funcionalidad
          intuitiva. Disfruto el proceso de convertir ideas en realidad
          utilizando soluciones creativas. Siempre tengo curiosidad por aprender
          nuevas habilidades, herramientas y conceptos. Además de trabajar en
          varios proyectos full stack en solitario, he trabajado con equipos
          creativos, lo que implica stand-ups y comunicaciones diarias, control
          de fuentes y gestión de proyectos.
        </Info>

        <BotonInfo href="mailto:Johan.aguero@hotmail.com?Subject=Interesado%20en%20en%20contratar%20tus%20servicios">Contratame</BotonInfo>
      </ConstenedorInfo>
    </SeccionInformacion>
  );
};

export default Informacion;
