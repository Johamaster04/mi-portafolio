import logo1 from "../../assets/img/1.png"
import logo13 from "../../assets/img/13.png"
import logo3 from "../../assets/img/3.png"
import logo14 from "../../assets/img/14.png"
import logo5 from "../../assets/img/5.png"
import logo6 from "../../assets/img/6.png"
import logo15 from "../../assets/img/15.png"
import logo8 from "../../assets/img/8.png"
import logo9 from "../../assets/img/9.png"
import logo10 from "../../assets/img/10.png"
import logo11 from "../../assets/img/11.png"
import logo12 from "../../assets/img/12.png"
import { Contenedor } from "../QuienSoy"
import styled from "styled-components"
import { Boton } from "../header"
import { Info } from "../Acerca-de-mi"

const ContenedorDescripcion = styled(Contenedor)`
    margin: 0 auto;
    display: flex;
    width: 95%;
    text-align: left;

    @media (max-width: 480px) {
    flex-direction:column;
    margin: 10px;
    width: 100%;
  }
`

const Descripcion = styled.div`
    display: inline-grid;
    justify-items: start;
    align-items: center;
    
    @media (max-width: 480px) {
   display:flex;
   flex-direction:column;   
  }
`
const InfoHabilidades = styled(Info)`
    margin: 20px 0;

    @media (max-width: 480px) {
      text-align: center;
    }
`

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 0.3rem;
  border-radius: 10px;

  @media (max-width: 480px) {
    margin: 5px;
  }
`;

const ContenedorIconos = styled(Contenedor)`
  margin: 0 0 0 15px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  max-width: 40%;
  justify-content: center;

  @media (max-width: 480px) {
    max-width:none;
    margin: 0 auto;
  }
`;

const BotonHabilidades = styled(Boton)`
    margin-top: 4rem;

    @media (max-width: 480px) {
      display:block;
      margin: 4rem;
    }
`
const Habilidades = () => {
    return <ContenedorDescripcion id="descripcion">
    <Descripcion>        
        <h3>Mis Habilidades</h3>
        <h1>¿Qué incluyen mis habilidades de programación?</h1>
        <InfoHabilidades>Desarrollo una interfaz de usuario simple, intuitiva y receptiva que ayuda a los usuarios a hacer las cosas con menos esfuerzo y tiempo con esas tecnologías.</InfoHabilidades>

        <BotonHabilidades href="mailto:Johan.aguero@hotmail.com?Subject=Interesado%20en%20en%20contratar%20tus%20servicios">Contratame</BotonHabilidades>
    </Descripcion>

    <ContenedorIconos>
        <Logo src={logo1} alt="logos" />
        <Logo src={logo3} alt="logos" />
        <Logo src={logo11} alt="logos" />
        <Logo src={logo13} alt="logos" />
        <Logo src={logo14} alt="logos" />
        <Logo src={logo6} alt="logos" />
        <Logo src={logo8} alt="logos" />
        <Logo src={logo9} alt="logos" />
        <Logo src={logo10} alt="logos" />
        <Logo src={logo15} alt="logos" />
        {/* <Logo src={logo5} alt="logos" />
        <Logo src={logo12} alt="logos" /> */}
    </ContenedorIconos>
</ContenedorDescripcion>
}

export default Habilidades