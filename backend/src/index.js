const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
dotenv.config();

app.use(routes);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Database is ready"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
