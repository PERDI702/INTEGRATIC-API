import mongoose, { createConnection } from "mongoose";
require("dotenv").config();
const port = process.env.PORT || 3000;

//Conectar nodejs a Mongodb
(async () => {
  try {
    const db = await mongoose.createConnection(process.env.MONGODB_ITICDB2);
    console.log("DB connected to Integratic data base");
  } catch (error) {
    console.error(error);
  }
})();
