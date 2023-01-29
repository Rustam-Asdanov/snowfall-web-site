const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { getPage } = require("./controller/main_page_controller");
const port = 3000;

app.use("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", async (req, res) => {
  res.render("index");
});

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
