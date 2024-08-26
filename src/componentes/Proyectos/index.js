import styled from "styled-components";
import aluraflix from "../../assets/img/aluraflix.png";
import encriptador from "../../assets/img/encriptador.png";
import administrador from "../../assets/img/administrador-citas.png";
import gasto from "../../assets/img/gasto-semanal.png";
import cotizador from "../../assets/img/cotizador-seguro.png";
import carrito from "../../assets/img/carrito-compra.png";
import { Enlace } from "../header";
import { Contenedor } from "../QuienSoy";
import ProjectCard from "./Cardproyectos";

const ContenedorProyectos = styled.main`
  margin: 5rem auto;
  width: 95%;
`;
export const ProyectosTitulos = styled.div`
  text-align: center;
`;
export const StyledH3 = styled.h3`
  width: 20%;
  margin: 0 auto;
`;

const ContenedorBloques = styled(Contenedor)`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;  
`;



const Proyectos = () => {
  return (
    <ContenedorProyectos id="proyectos">
      <ProyectosTitulos>
        <StyledH3>Mis Proyectos</StyledH3>
        <h1>Trabajos Destacados</h1>

        {/* <nav>
          <Enlace>Todos</Enlace>
          <Enlace>Aplicaciones Moviles</Enlace>
          <Enlace>Diseños Web</Enlace>
          <Enlace>Desarrollo Web</Enlace>
        </nav> */}
      </ProyectosTitulos>

      <ContenedorBloques>
        <ProjectCard
          src={aluraflix}
          alt="Aplicaciones"
          link="https://aluraflix-peliculas.vercel.app"
        />
        <ProjectCard
          src={carrito}
          alt="Aplicaciones"
          link="https://proyecto-carrito-compras-alpha.vercel.app/"
        />
        
        <ProjectCard
          src={administrador}
          alt="Aplicaciones"
          link="https://proyecto-administrador-de-citas.vercel.app"
        />
        <ProjectCard
          src={encriptador}
          alt="Aplicaciones"
          link="https://challenge-encriptador-three.vercel.app"
        />
        <ProjectCard
          src={gasto}
          alt="Aplicaciones"
          link="https://proyecto-gasto-semanal-ten.vercel.app/"
        />
        
        <ProjectCard
          src={cotizador}
          alt="Aplicaciones"
          link="https://cotizador-de-seguro-de-autos.vercel.app/"
        />
      </ContenedorBloques>
    </ContenedorProyectos>
  );
};

export default Proyectos;