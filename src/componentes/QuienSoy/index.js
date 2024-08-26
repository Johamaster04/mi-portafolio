import styled from "styled-components";
import Avatar from "../../assets/img/avatar.png"
import Emblema from "../../assets/img/emblema.png"
import Check from "../../assets/img/chekc.png"
import Clientes from "../../assets/img/clientes.png"

export const Contenedor = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: 0 auto;
  text-align:center;
`;

const ContenedorLogros = styled(Contenedor)`
    display: flex;
    margin-top: 50px;
    width: 100%;
    justify-content: center
`

const Logros = styled.div`
  display: flex;
  align-items: center;
  background-color: #25292e;
  padding: 0.5rem;
  filter: drop-shadow(10px 10px 51px rgba(0, 0, 0, 0.25));
  border-radius: 1rem;
  margin: 10px;
  width: 30%;
`;

const ImagenLogros = styled.img`
  width: 64px;
  height: 64px;
  margin: 1.5rem 1.5rem;
`;

const TituloLogros = styled.p`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 75%;
    font-family: "Inter" sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 40px;
    color: white;
    text-align: center;
`

const NumeroLogros = styled.span`
  color: #ffb742;
  font-family: "Inter", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  height: 0;
`;

const QuienSoy = () => {
    return (
      <section>
        <Contenedor>
          <h2>Hola, Yo Soy Johansen Picado 👋</h2>
          <h1>Diseñador creativo y desarrollador Front-End</h1>
          <p>
            Diseño y codifico cosas hermosas y sencillas, y me encanta lo que
            hago.
          </p>

          <Contenedor class="avatar">
                    <img src={Avatar} alt="Avatar"/>
            </Contenedor>
        </Contenedor>

        <ContenedorLogros>
            <Logros>
                <ImagenLogros src={Emblema} alt="Emblema" />
                <TituloLogros> <NumeroLogros>4+</NumeroLogros><br/> Años de Experiencia</TituloLogros>
            </Logros>
            <Logros>
                <ImagenLogros src={Check} alt="check"/>
                <TituloLogros><NumeroLogros>25+</NumeroLogros> <br/> Proyectos Completados</TituloLogros>
            </Logros>
    
            {/* <Logros>
                <ImagenLogros src={Clientes} alt="clientes"/>
                <TituloLogros><NumeroLogros>50+</NumeroLogros><br/> Clientes Satisfechos</TituloLogros>
            </Logros> */}
        </ContenedorLogros>
      </section>
    );
}

export default QuienSoy