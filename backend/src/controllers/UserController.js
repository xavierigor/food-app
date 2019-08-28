const axios = require("axios");
const User = require("../models/User");

// Retrieve all users
exports.index = async function(req, res) {
  const users = await User.find({});

  return res.json(users);
};

// Store user
exports.store = async function(req, res) {
  return res.send("store method");
};
