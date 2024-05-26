
import "./home.css";
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            <header>  
            
      <div className="description" >
        <p>
          Contact: nahuel_pro_517@hotmail.com
        </p>
     
          <a
            href="https://github.com/Nahuelhermosa"
            target="_blank"
            rel="noopener noreferrer"
          >
             My Github{" "}
         
          <img  src="icono-github4.png" alt="icono js" className="icono" />
          </a>
        
      </div>
      </header> 


            <div className="pictur">
              <div className="descripcion">
              <h1>Nahuel Hermosa</h1>
              <h2>Profesional Web Debeloper</h2>
              <br />
              <p>
              Hi, I'm Nahuel Hermosa, I'm passionate about Fron End Debeloper, I live in Buenos Aires, Argentina.
              </p>
              <br /> 
              
              <div className="logos">
                    <img src="icono-js.png" alt="icono js" className="icono" />
                    <img src="icono-css.png" alt="icono css" className="icono" />
                    <img src="icono-html1.png" alt="icono html" className="icono" />
                    <img src="icono-reac1.png" alt="icono reac" className="icono" />
                    <img src="icono-angular.png" alt="icono angular" className="icono" />                      
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