
import "./home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Home() {

    return (
        <>
            <header>  
            
      <div className="description" >
         <a className="contacto"
            href="https://www.linkedin.com/in/nahuel-eduardo-hermosa-035799277/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img  src="icono-linkedin.png" alt="icono linkedin" className="icono1" /> 
           My Linkedin{" "}
          </a>
     
          <a className="contacto"
            href="https://github.com/Nahuelhermosa"
            target="_blank"
            rel="noopener noreferrer"
          >
             My Github{" "}
         
          <img  src="icono-github1.png" alt="icono github" className="icono2" />
          </a>
        
      </div>
      </header> 


            <div className="pictur">
             
              <div className="descripcion"> 
                
              <h1 className="nombre">NAHUEL EDUARDO HERMOSA</h1>
             
              {/* 👇 Nuevo contenedor para texto + imagen */}
    <div className="about-grid">
      <p className="nombre-descripcion">
      Hi, I’m Nahuel Hermosa, a Full Stack Web Developer focused on building modern, responsive web applications using React, Next.js, and Vue.js. I create intuitive user interfaces and integrate APIs to deliver seamless digital experiences.

On the backend, I work with Node.js, Express, SQL, and Python (Django), building scalable and data-driven applications. I completed my professional training at Coderhouse, where I strengthened my full stack development skills through hands-on projects and real-world practices.
      </p>

      <img className="imagen" src="otro2.jpg" alt="Foto de perfil de Nahuel" />
    </div>
          
<br />
              
              <h2 className="nombre3">My skills</h2>
           <div className="logos">

            <img src="icono-js.png" alt="icono js" className="icono" />
           <img src="icono-python2.png" alt="icono html" className="icono" />
             <img src="icono-reac1.png" alt="icono reac" className="icono" />     
             <img src="icono-vue.png" alt="icono vue" className="icono" />  
            <img src="icono-nodejs.png" alt="icono node" className="icono" />
            <img src="icono-css.png" alt="icono css" className="icono" /> 
            <img src="icono-angular.png" alt="icono angular" className="icono" />              
            
            
                     
           </div>
<br />
           <div className="all-projects">
           <Link className="contacto" to="/titles">
           MY TITLES
           </Link>
           <Link className="contacto" to="/MyProjects">
           MY PROJECTS
           </Link>
           </div>
            
              </div>
            </div>
        <Footer/>
        </> 
    );
}

export default Home;