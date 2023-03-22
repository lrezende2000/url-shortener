require("dotenv/config");
const express = require("express");

const router = require("./router");

const app = express();

app.use(express.json());

app.use(router);

app.listen(8000, () => console.log("Server is running on por 8000"));