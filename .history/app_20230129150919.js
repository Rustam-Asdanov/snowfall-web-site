const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const main_router = require("./router/main_router");
const port = 3000;

app.use("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/", main_router);

const start = async () => {
  try {
    // await connectionDB(process.env)
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
