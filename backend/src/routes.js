const routes = require("express").Router();
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");

// User routes
routes.get("/users", UserController.index);
routes.post("/users/store", UserController.store);

module.exports = routes;
