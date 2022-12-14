import express from "express";
//import exphbs from "express-handlebars";
import {create} from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

/**
 * name: __dirname
 * description: permite obtener la ruta donde se encuentra guardada la carpeta
 */
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "default-layout",
    extname: ".hbs",
  }).engine
);

app.set("view engine", ".hbs");

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

// Routes
app.use(indexRoutes);

export default app;
