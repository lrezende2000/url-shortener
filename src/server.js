require("dotenv/config");
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const yaml = require("yamljs");

const router = require("./router");

const app = express();

const PORT = process.env.PORT || 8000;
const docs = yaml.load("./doc.yml");

app.use(express.json());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));
app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
