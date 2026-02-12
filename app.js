const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes/apiRoutes"); // your routes file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiRoutes); // All API routes under /api

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

