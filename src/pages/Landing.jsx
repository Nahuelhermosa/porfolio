// pages/Landing.jsx

import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    
        <div className="pictur">
             
              <div className="descripcion"> 
                
              <h1 className="nombre">NAHUEL EDUARDO HERMOSA</h1>
              <br />
              <h2 className="nombre2">professional full stack</h2>

            <button
  onClick={() => navigate("/access")}
  style={{
    display: "block",
    margin: "25px auto",
    padding: "12px 30px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  Ingresar
</button>
      </div>
    </div>
  );
}