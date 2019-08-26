const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    githubId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
