const express = require("express");

const UrlController = require("./controllers/UrlController");
const { getUrl } = require("./services/UrlService");

const router = express.Router();

router.use("/url", UrlController);

router.use("/:id", async (req, res) => {
  try {
    const link = await getUrl(req.params.id);

    return res.json({
      error: false,
      link,
    });
  } catch {
    return res.status(400).json({
      error: true,
      message: "Não foi possível encontrar o link original",
    });
  }
});

module.exports = router;
