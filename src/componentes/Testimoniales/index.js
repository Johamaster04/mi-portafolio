import styled from "styled-components"
import fototw from "../../assets/img/fototw.png"
import { Contenedor } from "../QuienSoy"
import { ProyectosTitulos, StyledH3 } from "../Proyectos"

const ContenedorTestimonial = styled.div`
    padding: 5rem;
    display: grid;
    grid-template-columns: 26.3% 26.3% 26.3%;
    gap: 3rem;
    justify-content: center;
`
const Descripcion = styled.div`
    padding: 2rem;
    background-color: white;
    border-radius: 7.92699px;
`
const Testimonial = styled.p`
    color: black;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    margin: 1rem;
`
const ImagenNombre = styled.div`
    align-items: center;
    display: flex;
`


const Testimoniales = () => {
    return <Contenedor> 
    <ProyectosTitulos>
        <StyledH3>Testimoniales</StyledH3>
        <h1>Que dice la gente</h1>
    </ProyectosTitulos>

    <ContenedorTestimonial> 
        <Descripcion> 
            <Testimonial>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus</Testimonial>
            <ImagenNombre>
                <img src={fototw} alt="Twitter"/>

                <Testimonial><strong>Khushi Gupta</strong><br/> Designer </Testimonial>
            </ImagenNombre>
        </Descripcion> 

         <Descripcion>
            <Testimonial>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus</Testimonial>

            <ImagenNombre>
                <img src={fototw} alt="Twitter"/>

                <Testimonial><strong>Khushi Gupta</strong><br/> Designer </Testimonial>
            </ImagenNombre>
        </Descripcion>

        <Descripcion> 
            <Testimonial>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus</Testimonial>

            <ImagenNombre>
                <img src={fototw} alt="Twitter"/>

                <Testimonial><strong>Khushi Gupta</strong><br/> Designer </Testimonial>
            </ImagenNombre>
        </Descripcion> 
    </ContenedorTestimonial>
</Contenedor>
}

export default Testimoniales