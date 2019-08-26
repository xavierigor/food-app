const axios = require("axios");
const passport = require("passport");
const User = require("../models/User");

module.exports = {
  signinGithubRedirect(req, res, next) {
    if (req.user) {
      return res.status(200).json(req.user);
    }
    return res.json({ error: { message: "Oops, there was an error" } });
  }
};
