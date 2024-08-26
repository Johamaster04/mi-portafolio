import { createGlobalStyle } from "styled-components";
import  './assets/styles/normalize.css'


const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 62.5%;
  /** Reset para REMS -62.5% = 10 px de 16px **/
  scroll-behavior: smooth;
}

body {
  background-color: #212529;
  font-family: "Poppins", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

/** Globales **/

a {
  font-family: "Poppins", sans-serif;
}

section {
  margin: 4rem;
}

img {
  max-width: 100%;
}

.boton {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  width: 121px;
  height: 54px;
  background-color: #ffb742;
  border-radius: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 26px;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 17px;
  text-decoration: none;
}

.boton:hover {
  background-color: #ffbe56;
}

.logo {
  width: 80px;
  height: 80px;
}

h1 {
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  margin-top: 1.2rem;
}

h2 {
  color: white;
  font-family: "Inter", "sans-serif";
  font-style: Bold;
  font-weight: 700;
  font-size: 32px;
  align-self: center;
}

h3 {
  color: #ffb742;
  font-family: "Poppins" serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  width: auto;
  height: auto;
  background-color: #ffffff14;
  padding: 6px 25px;
  border-radius: 5rem;
}

p {
  color: white;
  font-family: "Inter", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  align-self: center;
}
`

export default GlobalStyle