
import express from "express"; 
import mongoose from "mongoose";
import colors from "colors";

//importar rutas de moviesRoutes
import moviesRouter from "./routes/moviesRoutes.js";

// DB connection
try {
    mongoose.connect(
        "URL",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log(colors.bold("Database connection established")));
} catch (error) {
    console.log(error);
}

// inicialización de app
const app = express();

// configuración para recibir información en formato json
app.use(express.json({extended: false}));

// ruta base de middleware
app.use("/api/v1/movies", moviesRouter);

// app escuchando en el puerto 3000
app.listen(3000, ()=> console.log(colors.blue("Server running in 3000 port.")));
