const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");
const movieController = require("../controllers/movieController");

// Customers
router.post("/customer", customerController.addCustomer);
router.get("/customers", customerController.getCustomers);
router.get("/customer/:id", customerController.getCustomerById);
router.put("/customer/:id", customerController.updateCustomer);
router.delete("/customer/:id", customerController.deleteCustomer);

// Movies
router.post("/movie", movieController.addMovie);
router.get("/movies", movieController.getMovies);
router.get("/movie/:id", movieController.getMovieById);
router.put("/movie/:id", movieController.updateMovie);
router.delete("/movie/:id", movieController.deleteMovie);

// Rentals
router.post("/rent", movieController.rentMovie);
router.post("/return", movieController.returnMovie);
router.get("/rentals", movieController.getRentals);

module.exports = router;
