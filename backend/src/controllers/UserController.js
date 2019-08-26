const axios = require("axios");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find({});

    res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.json(userExists);
    }

    const newUser = await User.create({
      username
    });

    return res.json(newUser);
  }
};
