const routes = require("express").Router();
const passport = require("passport");
const passportSetup = require("./passport/github");
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");

// User routes
routes.get("/users", UserController.index);
routes.post("/users/store", UserController.store);

// Auth routes
routes.get("/auth/github", passport.authenticate("github"));

routes.get(
  "/auth/github/redirect",
  passport.authenticate("github"),
  AuthController.signinGithubRedirect
);

module.exports = routes;
