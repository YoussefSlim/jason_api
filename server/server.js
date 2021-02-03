require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sanitizeHtml = require("sanitize-html");
const router = require("./router");

const port = process.env.PORT || 3000;
const server = express();

// on peut configurer nos CORS à la mano ou via un module NPM bien foutu
server.use(
  cors({
    origin: "*",
  })
);

// middleware pour avoir accès à req.body
server.use(express.json());

// on va ajouter un middleware qui va modifier req.body en venant échapper tout le html qui pourrait être présent dedans
server.use((req, res, next) => {
  // je vais modifier tout ce qu'il pourrait y avoir dans req.body
  if (req.body) {
    for (const property in req.body) {
      req.body[property] = sanitizeHtml(req.body[property]);
    }
  }
  // puis passer au middleware suivant
  next();
});

// routeur
server.use(router);

server.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
