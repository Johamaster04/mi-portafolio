import styled from "styled-components"
import { Contenedor } from "../QuienSoy"
import { Boton, Enlace } from "../header"

const SiteFooter = styled(Contenedor)`
    width: 100%;
    display: grid;
    grid-template-columns: 22% 22%;
    text-align: center;
    justify-content: center;
    background-color: #1c1c1c;
    padding: 15rem 3rem 0 6rem;
    margin: -12rem auto;

    @media (max-width: 480px ) {
        margin: -12rem 10px;
        display: flex;
        padding: 12rem 5px 0 5px;        
    }
`
const BloquesFooter = styled.div`
    margin: 1rem;

    @media (max-width: 480px) {
        margin: 0 auto 10px auto;
    }
`
const TituloFooter = styled.h3`
    background: none;
    color:white;
`

const BloqueSuscripcion = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    text-align: center;
`

const EnlaceFooter = styled(Enlace)`
    display: block;
    color: #7b7b7b;
    margin: 1rem;

    @media (max-width: 480px) {
        font-size: 16px;
    }
`
const Input = styled.input`
    width: 24rem;
    text-align: center;
    font-size: 1.5rem;
    background-color: #212529;
    border: 0;
    border-radius: 49px;
    padding: 12px 26px;
`
const ContenedorInput = styled.div`
    display: flex;
    background-color: #212529;
    border-radius: 49px;
`
const Footer = () => {
    return <SiteFooter>
    <BloquesFooter>
        <TituloFooter>Enlaces útiles</TituloFooter>
        <nav>
            <EnlaceFooter href="/#inicio">Inicio</EnlaceFooter>
            <EnlaceFooter href="/#acerca-de-mi">Acerca de mi</EnlaceFooter>               
            <EnlaceFooter href="/#descripcion">Habilidades</EnlaceFooter>
            <EnlaceFooter href="/#proyectos">Proyectos</EnlaceFooter>
        </nav>
    </BloquesFooter>

    <BloquesFooter>
        <TituloFooter>Redes Sociales</TituloFooter>

        <nav>
            {/* <EnlaceFooter  href="#">Facebook</EnlaceFooter>
            <EnlaceFooter  href="#">Instagram</EnlaceFooter> */}
            <EnlaceFooter  href="https://github.com/Johamaster04">Github</EnlaceFooter>
            <EnlaceFooter href="https://www.linkedin.com/in/johansen-picado">Linkedin</EnlaceFooter>
        </nav>
    </BloquesFooter>

    {/* <BloqueSuscripcion>
        <h2>Boletin informativo</h2>
        <p>Ingrese su correo electrónico y reciba notificaciones sobre noticias y mucho mas.</p>

        <ContenedorInput>
            <Input placeholder="Correo Electronico" type="email"/>
            <Boton href="#">Enviar</Boton>
        </ContenedorInput>
    </BloqueSuscripcion> */}
</SiteFooter>
}

export default Footer