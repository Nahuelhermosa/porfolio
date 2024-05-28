import './Footer.css'
export default function Footer () {
    return (
        <footer className='footer'>
        
            
        <div className="description" >
            <a className="contacto"
            href="https://vercel.com/nahuelhermosas-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img  src="icono-vercel2.png" alt="icono linkedin" className="icono2" /> 
          Vercel   My Projects{" "}
          </a>
          <a className="contacto"
             href="mailto:nahuel_pro_517@hotmail.com?subject=Contacto%20desde%20tu%20sitio%20web&body=Hola%2C%20Nahuel!"
            target="_blank"
            rel="noopener noreferrer"
          >
             My Contact{" "}
         
          <img  src="sobre5.png" alt="icono github" className="icono2" />
          </a>
          </div>
        </footer>
    )
}