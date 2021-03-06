const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 4000;

const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);

app.use(express.static(staticPath));
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});



//! agar chate ho toh aisa folder structure bna skte ho for css , partials and views....