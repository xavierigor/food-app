const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
dotenv.config();

app.use(routes);

// connect with mongodb database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Database is ready"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
