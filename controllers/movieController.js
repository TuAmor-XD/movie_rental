const pool = require("../db/dbConnection");

// Add a movie
exports.addMovie = async (req, res) => {
  try {
    const { title, rental_days, price, available } = req.body;
    const result = await pool.query(
      "INSERT INTO movies (title, rental_days, price, available) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, rental_days, price, available]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies ORDER BY movieid");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM movies WHERE movieid = $1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update movie
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, rental_days, price, available } = req.body;
    const result = await pool.query(
      "UPDATE movies SET title=$1, rental_days=$2, price=$3, available=$4 WHERE movieid=$5 RETURNING *",
      [title, rental_days, price, available, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete movie
exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM movies WHERE movieid=$1 RETURNING *",
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Rent a movie
exports.rentMovie = async (req, res) => {
  try {
    const { customer_id, movieid, duedate } = req.body;
    const result = await pool.query(
      "INSERT INTO rentals (customer_id, movieid, rentaldate, duedate, status) VALUES ($1, $2, CURRENT_DATE, $3, 'rented') RETURNING *",
      [customer_id, movieid, duedate]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Return a movie
exports.returnMovie = async (req, res) => {
  try {
    const { rentalid } = req.body;
    const result = await pool.query(
      "UPDATE rentals SET returndate = CURRENT_DATE, status = 'returned' WHERE rentalid=$1 RETURNING *",
      [rentalid]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all rentals
exports.getRentals = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM rentals ORDER BY rentalid");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
