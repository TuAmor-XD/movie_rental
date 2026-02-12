const { Movie } = require("../dist/classes/Movie"); // <-- destructure the named export

const addMovie = async (req, res) => {
  const { title, rentalPeriod, rentalPrice } = req.body;
  const movie = new Movie(title, rentalPeriod, rentalPrice);
  await movie.addMovie();
  res.json({ message: "Movie added" });
};

const rentMovie = async (req, res) => {
  const { movieId, customerId } = req.body;
  await Movie.rentMovie(movieId, customerId);
  res.json({ message: "Movie rented" });
};

const returnMovie = async (req, res) => {
  const { movieId } = req.body;
  await Movie.returnMovie(movieId);
  res.json({ message: "Movie returned" });
};

module.exports = {
  addMovie,
  rentMovie,
  returnMovie
};
