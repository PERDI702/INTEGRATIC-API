import { Router } from "express";
import Computer from "../models/Computer";

const router = Router();

//Ruta a la pagina principal (index)
router.get("/", (req, res) => {
  res.render("index");
});

//Guarda la informacion en la direccion /computer/add
router.post("/computer/add", async (req, res) => {
  const computer = Computer(req.body);

  //Guardar datos en mongodb
  const computerSaved = await computer.save();

  //Redirecciona a la pagina principal
  res.redirect("/");
});

//Ruta a la pagina about
router.get("/about", (req, res) => {
  res.render("about");
});

//Ruta a la pagina edit
router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
