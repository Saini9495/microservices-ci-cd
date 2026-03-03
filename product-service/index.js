const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Product Service Running 🚀");
});

app.listen(4000, () => {
  console.log("Product Service running on port 4000");
});