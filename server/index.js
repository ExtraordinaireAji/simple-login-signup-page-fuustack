const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const logsinroute = require("./logsignroute");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(logsinroute);

connectDB();

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
