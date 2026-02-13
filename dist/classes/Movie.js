"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const MovieDef_1 = require("./MovieDef");
const dbconnection_1 = __importDefault(require("../db/dbconnection"));
class Movie extends MovieDef_1.MovieDef {
    constructor(title, rentalperiod, rentalprice) {
        super();
        this.setTitle(title);
        this.setRentalPeriod(rentalperiod);
        this.setRentalPrice(rentalprice);
        this.setStatus("Available");
    }
    getMovieId() { return this.movieid; }
    getTitle() { return this.title; }
    getRentalPeriod() { return this.rentalperiod; }
    getRentalPrice() { return this.rentalprice; }
    getStatus() { return this.status; }
    setMovieId(id) { this.movieid = id; }
    setTitle(title) { this.title = title; }
    setRentalPeriod(days) { this.rentalperiod = days; }
    setRentalPrice(price) { this.rentalprice = price; }
    setStatus(status) { this.status = status; }
    async addMovie() {
        const result = await dbconnection_1.default.query(`INSERT INTO movies (title, rentalperiod, rentalprice, status)
       VALUES ($1, $2, $3, $4) RETURNING movieid`, [this.title, this.rentalperiod, this.rentalprice, this.status]);
        this.setMovieId(result.rows[0].movieid);
    }
    static async rentMovie(movieid, customerid) {
        await dbconnection_1.default.query(`INSERT INTO rentals (customerid, movieid) VALUES ($1, $2)`, [customerid, movieid]);
        await dbconnection_1.default.query(`UPDATE movies SET status='Rented' WHERE movieid=$1`, [movieid]);
    }
    static async returnMovie(movieid) {
        await dbconnection_1.default.query(`UPDATE movies SET status='Available' WHERE movieid=$1`, [movieid]);
    }
}
exports.Movie = Movie;
