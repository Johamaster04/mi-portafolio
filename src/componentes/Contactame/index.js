import styled from "styled-components";
import { Boton } from "../header";
import GlobalStyle from "../../Global";

const Trabajo = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 8rem;
  background-color: #ffb742;
  border-radius: 15px;
  margin: 4rem;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 5px;
    text-align: center;
    margin: 10px;
  }
`;
const TituloTrabajo = styled.h1`
  color: black;
  margin: 0 1rem;
`;

const DescripcionTrabajo = styled.h3`
  font-size: 16px;
  line-height: 30px;
  background-color: #ffb742;
  padding: 0;
  height: 59.99951171875px;
  width: 359.00018310546875px;
  color: black;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const BotonTrabajo = styled(Boton)`
  border: 2px solid black;
  margin: 1rem;

  @media (max-width: 480px) {
    display: block;
  }
`;

const TrabajaConmigo = () => {
  return (
    <Trabajo class="trabaja-conmigo">
      <TituloTrabajo>
        Comenzar un <br /> Proyecto
      </TituloTrabajo>
      <GlobalStyle />
      <DescripcionTrabajo>
        ¿Interesado en trabajar juntos? Deberíamos ponernos en contacto.
        Invitame a un café.
      </DescripcionTrabajo>
      <BotonTrabajo
        href="mailto:Johan.aguero@hotmail.com?Subject=Interesado%20en%20en%20contratar%20tus%20servicios"
        class="boton Hagamoslo"
      >
        Hagamoslo
      </BotonTrabajo>
    </Trabajo>
  );
};

export default TrabajaConmigo;
