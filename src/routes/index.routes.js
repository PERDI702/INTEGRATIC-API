import { Router } from "express";

const router = Router();

//Ruta a la pagina principal (index)
router.get("/", (req, res) => {
  res.render("index");
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
