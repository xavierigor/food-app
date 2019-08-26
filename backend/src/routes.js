const routes = require("express").Router();
const UserController = require("./controllers/UserController");

// User routes
routes.get("/users", UserController.index);
routes.post("/users/store", UserController.store);

module.exports = routes;
