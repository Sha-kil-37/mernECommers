const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const route = require("../router/productRouter");
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1",route);
//

module.exports = app;

