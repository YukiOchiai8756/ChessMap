const express = require("express");
const PORT = process.env.PORT || 8000;
const api = require("./api");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from backend");
});

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});