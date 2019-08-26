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
  },

  async signinGithub(req, res, next) {
    const { code } = req.query;

    if (!code) {
      return res.send({
        success: false,
        message: "Error: invalid code"
      });
    }

    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      }
    );

    return res.send(response.data);
  }
};
