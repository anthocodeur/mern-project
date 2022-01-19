const express = require("express");
const app = express();

const articles = [
  {
    _id: 1,
    title: "ABC",
    author: "John Doe",
  },
  {
    _id: 2,
    title: "DEF",
    author: "Jane Doe",
  },
];

app.get("/articles", function (req, res) {
  res.json(articles);
});

app.listen(3000, () =>
  console.log("Ce serveur tourne sur le port http://localhost:3000")
);
