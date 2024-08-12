const mongoose = require("mongoose");
require("dotenv").config();
const port = `${process.env.port}`;
const dbUrl = `${process.env.dbUrl}`;
//
const url = dbUrl;
const option = {
  autoIndex: true,
};
const dbConnect = async () => {
  await mongoose
    .connect(url, option)
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = { dbConnect };
