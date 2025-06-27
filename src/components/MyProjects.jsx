import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function MyProjects() {
  return (
    <>
      <header>  
    
        <div className="description" >
        <NavLink to="/" className="contacto">
            <img src="inicio.png" alt="home" className="inicio" />
             Home
        </NavLink>
           <a className="contacto"
            href="https://www.linkedin.com/in/nahuel-eduardo-hermosa-035799277/"
            target="_blank"
            rel="noopener noreferrer">
           My Linkedin{" "}
           <img  src="icono-linkedin.png" alt="icono linkedin" className="icono1" />
           </a>
        </div>
        </header> 

        <h1 className="titulo">My Projects</h1>
      

        <main className="titles-content">
        <div className="titles-gallery">
           <h1>Escalibur web</h1>
           <h2>Ecomers con Next.js manejo de api, css dinamico, reponsive y carrito de compras.</h2>
          <img src="/portadaEscaliburWeb.png" alt="Título 1" className="titulo-img" />
          <br />
          <h1>Vintage Lab</h1>
          <h2>Ecomers con Vite manejo de api, responsive, usuarios, validaciones y carrito de compras.</h2>
          <img src="/portadaProyectoReact.png" alt="Título 3" className="titulo-img" /> 
          <br />
          <h1>La Tienda</h1>
          <h2>Ecomers con Angular manejo de apis, reponsive,usuarios y validaciones.</h2>
          <img src="/portadaProyectoAngular.png" alt="Título 2" className="titulo-img" />
          <br />
          <h1>Servisweb</h1>
          <h2>Web con Next.js css dinamico, responsive, contactos y validacion.</h2>
          <img src="/portadaServisWeb.png" alt="Título 4" className="titulo-img" />
         
        </div>
        </main>

        <Footer />
    </>     
         );
        };
           
export default MyProjects;