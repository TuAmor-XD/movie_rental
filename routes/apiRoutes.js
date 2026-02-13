const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");
const movieController = require("../controllers/movieController");

// Customer routes
router.post("/customer", customerController.addCustomer);

// Movie routes
// Get all customers
router.post("/customers", customerController.addCustomers);
router.get("/customers", customerController.getCustomers);

router.post("/movie", movieController.addMovie);
router.post("/rent", movieController.rentMovie);
router.post("/return", movieController.returnMovie);

module.exports = router;
