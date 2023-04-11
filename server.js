const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 80;
app.use(express.static(path.join(__dirname + "/dist/app")));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname + "/dist/app/index.html"))
);

console.log("listening on port : " , PORT);
app.listen(PORT);
