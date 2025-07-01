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
        <a
        href="https://comercio-escalibur.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaEscaliburWeb.png" alt="Título 1" className="titulo-img" />
        </a>
        <h2>E-commerce built with Next.js, featuring API integration, dynamic CSS, responsive design, and a shopping cart.</h2>
          <br />
     <h1>Servisweb</h1>
        <a
      href="https://servis-rust.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
          >
          <img src="/portadaServisWeb.png" alt="Título 4" className="titulo-img" />
        </a> 
        <h2>Website built with Next.js, featuring dynamic CSS, responsive design, contact form, and form validation.</h2>
         <br /> 
          
          <h1>Vintage Lab</h1>  
        <a
        href="https://web-project-pi-bice.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaProyectoReact.png" alt="Título 3" className="titulo-img" />
        </a> 
        <h2>E-commerce built with Vite, featuring API integration, user management, validations, and a shopping cart.</h2>
          <br />
          <h1>La Tienda</h1>
         
          <a
      href="https://angular-project-self.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
          >
          <img src="/portadaProyectoAngular.png" alt="Título 2" className="titulo-img" />
        </a>
         <h2>E-commerce built with Angular, featuring API integration, user management, and validations</h2>
          <br />
     

        </div>
        </main>

        <Footer />
    </>     
         );
        };
           
export default MyProjects;