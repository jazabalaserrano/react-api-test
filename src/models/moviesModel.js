import mongoose from "mongoose";
const { Schema, model } = mongoose;

const moviesSchema = new Schema({
    title: String,
    year: Number,
    plot: String,
    genres: Array,
    runtime: Number,
    cast: Array
});

const MOVIE = mongoose.model('movies', moviesSchema);

export default MOVIE;