module.exports = (app) => {
  const customer = require("../controllers/customer.controller");
  const r = require("express").Router();

  // Retrieve all customers
  r.get("/", customer.findAll);

  // Retrieve a specific customer by ID
  r.get("/:id", customer.show);

  // Create a new customer
  r.post("/", customer.create);

  // Update a customer by ID
  r.put("/:id", customer.update);

  // Delete a customer by ID
  r.delete("/:id", customer.delete);

  app.use("/customer", r);
};
