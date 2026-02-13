"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDef = void 0;
class MovieDef {
    // Static methods MUST have a body (cannot be abstract)
    static async rentMovie(movieid, customerid) {
        throw new Error("Method not implemented.");
    }
    static async returnMovie(movieid) {
        throw new Error("Method not implemented.");
    }
}
exports.MovieDef = MovieDef;
