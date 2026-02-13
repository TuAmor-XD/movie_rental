const pool = require("../db");

// ADD a new customer
exports.addCustomer = async (req, res) => {
  try {
    const { first_name, last_name, phone } = req.body;

    const result = await pool.query(
      "INSERT INTO customers (first_name, last_name, phone) VALUES ($1, $2, $3) RETURNING *",
      [first_name, last_name, phone]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET all customers
exports.getCustomers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers ORDER BY customer_id");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
