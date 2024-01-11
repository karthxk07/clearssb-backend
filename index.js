require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { getRndArray } = require("./src/helpers/rndArrayHelper");
const cors = require("cors");

const app = express();
const server = createServer(app);

app.use(express.static(path.join(__dirname, "/src/public/")));
app.use(cors());

app.get("/ppdt", (req, res) => {
  res.send(getRndArray(1)).end();
});
app.get("/TAT", (req, res) => {
  res.send(getRndArray(5)).end();
});

server.listen(process.env.PORT, () => {
  console.log("Server running on Port : ", process.env.PORT);
});
