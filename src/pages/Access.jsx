import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./acces.css";

export default function Access() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      if (!response.ok) {
        console.warn("No se pudo enviar el correo.");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      // Siempre entra al Home, haya funcionado o no el envío
      localStorage.setItem("access_granted", "true");
      navigate("/home");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="access-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="access-button">
          Entrar
        </button>
      </form>
    </div>
  );
}