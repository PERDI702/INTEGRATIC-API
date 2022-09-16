import { Router } from "express";
import Computer from "../models/Computer";

const router = Router();

//Ruta a la pagina principal (index)
router.get("/", async (req, res) => {
  res.render("index");
});

//Guarda la informacion en la direccion /computer/add
router.post("/computer/add", async (req, res) => {
  try {
    const computer = Computer(req.body);

    //Guardar datos en mongodb
    const computerSaved = await computer.save();

    //Redirecciona a la pagina principal
    res.redirect("/computer");
  } catch (error) {
    console.log(error);
  }
});

//Ruta a la pagina about
router.get("/about", (req, res) => {
  res.render("about");
});

//Ruta a la pagina edit
router.get("/edit/:id", async (req, res) => {
  const consulta = await Computer.findById(req.params.id).lean();

  res.render("edit", { consulta });
});

//Ruta a la pagina computer donde lista todos los computadores registrados
router.get("/computer", async (req, res) => {
  const computers = await Computer.find().lean();

  res.render("computer", { computers: computers });
});

//Ruta para actualizar datos
router.post("/edit/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await Computer.findByIdAndUpdate(id, req.body);

    res.redirect("/computer");
  } catch (error) {
    console.log(error);
  }
});

export default router;
