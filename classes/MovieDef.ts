export abstract class MovieDef {
  protected movieid!: number;
  protected title!: string;
  protected rentalperiod!: number;
  protected rentalprice!: number;
  protected status!: string;

  abstract getMovieId(): number;
  abstract getTitle(): string;
  abstract getRentalPeriod(): number;
  abstract getRentalPrice(): number;
  abstract getStatus(): string;

  abstract setMovieId(id: number): void;
  abstract setTitle(title: string): void;
  abstract setRentalPeriod(days: number): void;
  abstract setRentalPrice(price: number): void;
  abstract setStatus(status: string): void;

  abstract addMovie(): Promise<void>;
 // Static methods MUST have a body (cannot be abstract)
  static async rentMovie(movieid: number, customerid: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  static async returnMovie(movieid: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
