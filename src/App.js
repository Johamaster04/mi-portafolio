import Header from "./componentes/header";
import GlobalStyle from "./Global";
import QuienSoy from "./componentes/QuienSoy"
import Informacion from "./componentes/Acerca-de-mi";
import Habilidades from "./componentes/Habilidades";
import Proyectos from "./componentes/Proyectos";
import TrabajaConmigo from "./componentes/Contactame";
import Footer from "./componentes/Footer";


function App() {
  return (<>
    <GlobalStyle/>
    <Header/>
    <QuienSoy/>
    <Informacion/>
    <Habilidades/>
    <Proyectos/>
    <TrabajaConmigo/>
    <Footer/>
    </>
  );
}

export default App;
