import { MovieDef } from "./MovieDef";
import pool from "../db/dbconnection";

export class Movie extends MovieDef {
  constructor(title: string, rentalperiod: number, rentalprice: number) {
    super();
    this.setTitle(title);
    this.setRentalPeriod(rentalperiod);
    this.setRentalPrice(rentalprice);
    this.setStatus("Available");
  }

  getMovieId(): number { return this.movieid; }
  getTitle(): string { return this.title; }
  getRentalPeriod(): number { return this.rentalperiod; }
  getRentalPrice(): number { return this.rentalprice; }
  getStatus(): string { return this.status; }

  setMovieId(id: number): void { this.movieid = id; }
  setTitle(title: string): void { this.title = title; }
  setRentalPeriod(days: number): void { this.rentalperiod = days; }
  setRentalPrice(price: number): void { this.rentalprice = price; }
  setStatus(status: string): void { this.status = status; }

  async addMovie(): Promise<void> {
    const result = await pool.query(
      `INSERT INTO movies (title, rentalperiod, rentalprice, status)
       VALUES ($1, $2, $3, $4) RETURNING movieid`,
      [this.title, this.rentalperiod, this.rentalprice, this.status]
    );
    this.setMovieId(result.rows[0].movieid);
  }

  static async rentMovie(movieid: number, customerid: number): Promise<void> {
    await pool.query(
      `INSERT INTO rentals (customerid, movieid) VALUES ($1, $2)`,
      [customerid, movieid]
    );
    await pool.query(
      `UPDATE movies SET status='Rented' WHERE movieid=$1`,
      [movieid]
    );
  }

  static async returnMovie(movieid: number): Promise<void> {
    await pool.query(
      `UPDATE movies SET status='Available' WHERE movieid=$1`,
      [movieid]
    );
  }
}
