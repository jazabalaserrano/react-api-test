import { Router } from "express";
import moviesController from "../controllers/moviesController.js";

const moviesRouter = Router();

// GET http://localhost:3000/api/v1/movies
moviesRouter.get("/", moviesController.getAll);

// GET http://localhost:3000/api/v1/movies/:year
moviesRouter.get("/:year",moviesController.getMoviesByYear);

// POST http://localhost:3000/api/v1/movies/
moviesRouter.post("/", moviesController.createMovie);

// DELETE http://localhost:3000/api/v1/movies/:year
moviesRouter.delete("/:id",moviesController.deleteMovieById);

// PUT http://localhost:3000/api/v1/movies/:id
moviesRouter.put("/:id",moviesController.updateMovieById);

export default moviesRouter;