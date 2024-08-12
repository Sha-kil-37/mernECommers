const { dbConnect } = require("./src/config/db/dbConnect");
const app = require("./src/views/app");
require("dotenv").config();
const port = `${process.env.port}`;


//
app.listen(port, () => {
  dbConnect();
  console.log(`server running ${port}`);
});
// 90 number download hoitace
