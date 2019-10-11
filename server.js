const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", users);

const port = 5000;

 app.listen(port, () => `Server running on port ${port}`);
