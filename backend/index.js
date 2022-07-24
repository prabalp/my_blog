const express = require("express");
const app = express();
// const router = require("express").Router();

const bodyParser = require("body-parser");
const cors = require("cors");
const { db_connect } = require("./db_connection");

const corsOptions = {
  origin: ["http://localhost:3001/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

require("dotenv").config();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const blogRouter = require("./routes/blog_route");

// use this if planning to use photos
// app.use("/uploads", express.static("./uploads"));

//env var
const URL = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

//routes
app.use("/blog", blogRouter);

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("My Blog API");
});

app.listen(port, () => {
  console.log("Listening on port 3000");
  db_connect(URL);
});
