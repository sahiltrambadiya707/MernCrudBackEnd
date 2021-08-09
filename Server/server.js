const express = require("express");
path = require("path");
bodyParser = require("body-parser");
cors = require("cors");
mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

// MongoDB Database Url
const mongoDatabase = process.env.DB;

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose
  .connect(mongoDatabase, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("there is problem while connecting database" + err);
    }
  );

// All the express routes
const employeeRoutes = require("../Routes/Employee.route");

// Conver incoming data to JSON formet
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes Configuration
app.use("/employees", employeeRoutes);

// Setup for the server port number
const port = process.env.PORT;

// Staring our express server
const server = app.listen(`${port}`, () => {
  console.log("Server Lisening On Port : " + `${port}`);
});
