const express = require('express');
const userSchema = require("../models/user");

const router = express.Router();

//Ruta para crear usuarios
router.post("/users", (req, res) => {
    //Crear un usuario teniendo la estructura del usuario y recibiendo los datos desde la peticion
    const user = userSchema(req.body);
    //Guardar el usuario en la base de datos de MongoDB
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Obtener todos los usuarios
router.get("/users", (req, res) => {
    //Encontrar usuarios
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Encontrar un usuario en especifico
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Actualizar informacion de un usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email} = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Eliminar un usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;