import MOVIE from "../models/moviesModel.js";

export const moviesService = {
    getAll: () => {
        try {
            return MOVIE.find({}, "-fullplot").limit(50); 
    }catch (err) {
        return err;
        };
    },
    getMoviesByYear: ( year ) => {
        try {
            return MOVIE.find({year: year}, "-fullplot").limit(50); 
    }catch (err) {
        return err;
        };
    },
    createMovie: async ( newMovie ) => {
        try {
            return await MOVIE.create( newMovie ); 
    }catch (err) {
        return err;
        };
    },
    deleteMovieById: ( id ) => {
        try {
            return MOVIE.findByIdAndUpdate(
                id,
                { title: "Movie got eliminated" },
                { new: true}
                ); 
    }catch (err) {
        return err;
        };
    },
    getMovieById: async ( id ) => {
        try {
            return await MOVIE.findById({ id: id });
    }catch (err) {
        return err;
        };
    },
    updateMovieById: async (id, newMovieData) => {
        try {
            return MOVIE.findByIdAndUpdate(
                { _id: id },
                { $set: {...newMovieData} },
                { new: true}
                ); 
    }catch (err) {
        return err;
        };
    }
}