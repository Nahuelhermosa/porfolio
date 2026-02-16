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
my expertise to the backend side by learning Python and Django, developing CRUD applications, implementing authentication systems, and integrating databases and RESTful APIs — further strengthening my capabilities as a full stack developer.
        </h2>

        <div className="titles-content2">
        <div className="titles-gallery2">
           <h1 className="nombre-proyectos">Escuela Belgrano<img src="icono-python.png" alt="icono vue" className="icono" /></h1>  
        <a
        href="https://proyecto-coder-zfbz.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaProyectoPython.png" alt="Título 1" className="titulo-img2" />
        </a>  
        <h2 className="descripcion-proyecto">
        The School Management System is a full-stack web application developed to efficiently manage academic data within an educational institution. It enables administrators to perform complete CRUD operations for students, teachers, and summer courses. The project features a secure user authentication system, modular architecture, and a responsive, modern design built with Bootstrap.Technologies Used: Django, Python, HTML5, CSS3, Bootstrap, SQLite</h2>
          <h1 className="nombre-proyectos">Escalibur web<img src="icono-vue.png" alt="icono vue" className="icono" /></h1>  
        
        <a
        href="https://comercio-escalibur.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaEscaliburWeb.png" alt="Título 1" className="titulo-img2" />
        </a>
        <h2 className="descripcion-proyecto">Escalibur Web is a responsive and scalable e-commerce platform developed with Next.js, leveraging component-based architecture and client-side state management.
The application integrates external data through RESTful APIs (PokeAPI), implementing asynchronous data fetching and dynamic rendering.
Key features include a fully operational shopping cart, real-time product search and filtering, and a contact form with email validation for improved data integrity.
The project emphasizes clean UI/UX, dynamic CSS styling, and responsive layouts, resulting in a visually refined and user-friendly experience across multiple devices.</h2>
          <br />
     <h1 className="nombre-proyectos">Servisweb<img src="icono-reac1.png" alt="icono reac" className="icono" /></h1>
        <a
      href="https://servis-rust.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
          >
          <img src="/portadaServisWeb.png" alt="Título 4" className="titulo-img2" />
        </a> 
        <h2 className="descripcion-proyecto">Service-based web application developed with Next.js and pure CSS, implementing responsive design principles and structured component-based architecture. The project includes dynamic navigation across multiple sections (Services, Image Gallery with search filtering, and Contact). The contact form integrates client-side validation and email handling functionality. Designed without authentication or database systems, focusing on performance, clean UI, accessibility, and cross-device compatibility.</h2>
         <br /> 
          
          <h1 className="nombre-proyectos">Vintage Lab<img src="icono-reac1.png" alt="icono reac" className="icono" /></h1>  
        <a
        href="https://web-project-pi-bice.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
          >
          <img src="/portadaProyectoReact.png" alt="Título 3" className="titulo-img2" />
        </a> 
        <h2 className="descripcion-proyecto">VintageLab is a React-based e-commerce application built with Vite, implementing component-based architecture and modern state management. The application integrates the Fake Store API to dynamically render randomized featured products on the Home page. It includes a responsive product listing with detailed pricing and shipping information, and a fully functional shopping cart with persistent state handling. The User section incorporates form validation and security best practices, while the Contact module provides email handling functionality. The project focuses on performance optimization, reusable components, responsive UI, and seamless user experience.</h2>
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