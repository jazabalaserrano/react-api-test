import { moviesService } from "../services/movieService.js";

const moviesController = {
    getAll: async (req, res) => {
        const allMovies = await moviesService.getAll();
        return res.status(200).json({
            status: "200",
            total: allMovies.length,
            data: allMovies
        });
    },
    getMoviesByYear: async (req, res) => {
        const { year } = req.params;
        const moviesByYear = await moviesService.getMoviesByYear(year);
        return res.status(200).json({
            status: "200",
            total: moviesByYear.length,
            data: moviesByYear
        });
    },
    createMovie: async (req, res) => {
        if (!req.body.title) {
            return res.status(400).json({
                status: 400,
                message: "the title is required"
            });
        } else if (!req.body.year) {
            return res.status(400).json({
                status: 400,
                message: "the year is required"
            });
        }else if (!req.body.plot) {
            return res.status(400).json({
                status: 400,
                message: "the plot is required"
            });
        }
        const movieStore = await moviesService.createMovie(req.body); 
        return res.status(200).json({
            status: "200",
            isStored: true,
            data: movieStore
        });
    },
    deleteMovieById: async (req, res) => {
        const { id } = req.params;
        const response = await moviesService.deleteMovieById(id);
        return res.status(200).json({
            status: "200",
            isDeteleted: true,
            data: response,
        });
    },
    updateMovieById: async (req, res) => {
        const { id } = req.params;
        const oldMovieData = await moviesService.getMovieById(id, req.params);
        if (!oldMovieData) {
            return res.status(404).json({
                status: 404,
                message: "the movie with the given id does not exist"
            });
        }
        const updatedMovie = {
            title: req.body.title ??  oldMovieData.title,
            year:  req.body.year  ??  oldMovieData.year,
            plot:  req.body.plot  ??  oldMovieData.plot 
        }
        const response = await moviesService.updateMovieById(id, updatedMovie);
        return res.status(200).json({
            status: "200",
            isUpdated: true,
            data: response,
        });  
    }    
}

export default moviesController;