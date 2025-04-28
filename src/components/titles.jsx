import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "./title.css";

function Titles() {
  return (
    <>
              <header>  
            
            <div className="description" >
            <NavLink to="/" className="contacto">
                    <img src="inicio.png" alt="home" className="inicio" />
                    Home
                </NavLink>
           
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
        <h1 className="titulo">My Titles</h1>
      

        <main className="titles-content">
        <div className="titles-gallery">
          <img src="/title-fullstack.jpg" alt="Título 1" className="titulo-img" />
          <img src="/title-frontend.jpg" alt="Título 2" className="titulo-img" />
          <img src="/title-react.jpg" alt="Título 3" className="titulo-img" />
          <img src="/title-nodejs.jpg" alt="Título 4" className="titulo-img" />
          <img src="/title-angular.jpg" alt="Título 5" className="titulo-img" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Titles;
