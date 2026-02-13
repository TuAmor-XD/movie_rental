const pool = require("../dbConnection");

// Add customer
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

// Get all customers
exports.getCustomers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers ORDER BY customer_id");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get one customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM customers WHERE customer_id = $1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update customer
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone } = req.body;
    const result = await pool.query(
      "UPDATE customers SET first_name=$1, last_name=$2, phone=$3 WHERE customer_id=$4 RETURNING *",
      [first_name, last_name, phone, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete customer
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM customers WHERE customer_id=$1 RETURNING *",
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
