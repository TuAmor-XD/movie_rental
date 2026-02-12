const { Customer } = require("../dist/classes/Customer"); // <-- destructure the named export

const addCustomer = async (req, res) => {
  try {
    const { firstname, lastname, phone } = req.body;
    const customer = new Customer(firstname, lastname, phone);
    const id = await customer.addCustomer();
    res.json({ customerid: id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add customer" });
  }
};

module.exports = { addCustomer };
