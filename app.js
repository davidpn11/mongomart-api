const express = require("express");
const bodyParser = require("body-parser");
const items = require("./items.json");

const app = express();
const cors = require("cors");
const config = require("./config");

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  const help = `
    <pre>
     Botathon API
      GET /items
    </pre>
    `;
  res.send(help);
});

app.get("/items", (req, res) => {
  res.send(items);
});

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});

module.exports = () => app;
