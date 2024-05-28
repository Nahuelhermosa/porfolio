
import "./home.css";
import Footer from "../components/Footer";

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
           My Cv{" "}
          </a>
     
          <a className="contacto"
            href="https://github.com/Nahuelhermosa"
            target="_blank"
            rel="noopener noreferrer"
          >
             My Github{" "}
         
          <img  src="icono-github4.png" alt="icono github" className="icono2" />
          </a>
        
      </div>
      </header> 


            <div className="pictur">
              <div className="descripcion">
              <h1 className="nombre">Nahuel Eduardo Hermosa</h1>
              <h2 className="nombre2">Professional Front End Debeloper</h2>
             
              <p className="nombre-descripcion">
              Hi, I'm Nahuel Hermosa, I'm passionate about Fron End Debeloper, I live in Buenos Aires, Argentina.
              </p>
              
              <h2 className="nombre3">My skills:</h2>
              <div className="logos">
                    <img src="icono-js.png" alt="icono js" className="icono" />
                    <img src="icono-css.png" alt="icono css" className="icono" />
                    <img src="icono-html1.png" alt="icono html" className="icono" />
                    <img src="icono-reac1.png" alt="icono reac" className="icono" />
                    <img src="icono-angular4.png" alt="icono angular" className="icono" />                      
                    <img src="icono-vue.png" alt="icono vue" className="icono" /> 
                       
                </div> 
             
              </div>
                <img className="imagen" src="ima1.png" alt="" />
            </div>
        <Footer/>
        </> 
    );
}

export default Home;