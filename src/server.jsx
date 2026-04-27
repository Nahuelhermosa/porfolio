const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal (opcional para test)
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.post("/send", async (req, res) => {
  try {
    const { name, email } = req.body;

    console.log("Datos recibidos:", name, email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nahuelhermosa902@gmail.com",
        pass: "APP_PASSWORD", // ⚠️ reemplazar
      },
    });

    await transporter.sendMail({
      from: email,
      to: "nahuelhermosa902@gmail.com",
      subject: "Nuevo visitante",
      text: `Nombre: ${name} | Email: ${email}`,
    });

    console.log("Mail enviado");

    res.send("OK");
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).send("Error al enviar mail");
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});