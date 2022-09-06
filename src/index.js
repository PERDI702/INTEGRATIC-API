const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/users");
import app from "./routes/app";

const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", userRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

//mongodb conection
mongoose
  .connect(process.env.MONGODB_ITICDB)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));