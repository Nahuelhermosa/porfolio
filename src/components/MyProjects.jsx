import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "./MyProjects.css";

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
       <main className="main">
        <h1 className="titulo2">My Projects</h1>
        <h2 className="intro-text">
        This section showcases a curated selection of my frontend and full stack projects developed using React, Next.js, Angular, and Vite. All applications are deployed on Vercel and demonstrate my skills in API integration, responsive design, dynamic styling, user interaction, and modern web development practices.
        </h2>

        <div className="titles-content2">
        <div className="titles-gallery2">
          <h1 className="nombre-proyectos">Escalibur web<img src="icono-vue.png" alt="icono vue" className="icono" /></h1>  
        <a
        href="https://comercio-escalibur.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaEscaliburWeb.png" alt="Título 1" className="titulo-img2" />
        </a>
        <h2 className="descripcion-proyecto">E-commerce built with Next.js, featuring API integration, dynamic CSS, responsive design, and a shopping cart.</h2>
          <br />
     <h1 className="nombre-proyectos">Servisweb<img src="icono-reac1.png" alt="icono reac" className="icono" /></h1>
        <a
      href="https://servis-rust.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
          >
          <img src="/portadaServisWeb.png" alt="Título 4" className="titulo-img2" />
        </a> 
        <h2 className="descripcion-proyecto">Website built with Next.js, featuring dynamic CSS, responsive design, contact form, and form validation.</h2>
         <br /> 
          
          <h1 className="nombre-proyectos">Vintage Lab<img src="icono-reac1.png" alt="icono reac" className="icono" /></h1>  
        <a
        href="https://web-project-pi-bice.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaProyectoReact.png" alt="Título 3" className="titulo-img2" />
        </a> 
        <h2 className="descripcion-proyecto">E-commerce built with Vite, featuring API integration, user management, validations, and a shopping cart.</h2>
          <br />
          <h1 className="nombre-proyectos">La Tienda<img src="icono-angular.png" alt="icono angular" className="icono" /></h1>
         
          <a
      href="https://angular-project-self.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
          >
          <img src="/portadaProyectoAngular.png" alt="Título 2" className="titulo-img2" />
        </a>
         <h2 className="descripcion-proyecto">E-commerce built with Angular, featuring API integration, user management, and validations</h2>
          <br />
     

        </div>
        </div>
</main>
        <Footer />
    </>     
         );
        };
           
export default MyProjects;