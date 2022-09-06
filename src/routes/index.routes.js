import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenido a mi API.routes");
});

//Ruta para un archivo HTML
router.get("/Inicio", (req, res) => {
  res.render("index");
});

export default router;
