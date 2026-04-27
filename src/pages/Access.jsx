// pages/Access.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./acces.css"; // 👈 IMPORTANTE

export default function Access() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Completa todos los campos");
      return;
    }

    try {
    await fetch("/api/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, email }),
});

      localStorage.setItem("access_granted", "true");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Error al enviar datos");
    }
  };

  return (
    <div className="access-container">
      <form onSubmit={handleSubmit} className="access-form">
        
        <h2 className="access-title">Acceso al Portfolio</h2>

        <input
          type="text"
          placeholder="Nombre"
          className="access-input"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="access-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="access-button">
          Entrar
        </button>

      </form>
    </div>
  );
}