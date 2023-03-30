const express = require("express");
const dayjs = require("dayjs");

const { listUrlSchema } = require("../schemas/urlSchemas");
const { createUrl, listUrl, deleteUrl } = require("../services/UrlService");
const { buildFakeUrl } = require("../helpers/url");

const router = express.Router();

router.post("/encurtar", async (req, res) => {
  try {
    const url = await createUrl(req.body);

    return res.status(201).json({
      error: false,
      url: buildFakeUrl(url.id),
      message: "Url encurtada com sucesso",
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Não foi possível encurtar a url",
    });
  }
});

router.get("/listar", async (req, res) => {
  try {
    const { date, ...search } = await listUrlSchema.validate(req.query);
    let minDate, maxDate;

    if (date) {
      const dateInput = dayjs(date).format("YYYY-MM-DD");
      minDate = `${dateInput}T00:00:00.000Z`;
      maxDate = `${dateInput}T23:59:59.000Z`;
    }

    const urls = await listUrl({
      ...search,
      createdAt: {
        gte: minDate,
        lte: maxDate,
      },
    });

    return res.json({
      error: false,
      links: urls,
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Não foi possível buscar as URLs",
    });
  }
});

router.delete("/deletar/:id", async (req, res) => {
  try {
    const urlDeleted = await deleteUrl(req.params.id);

    if (!urlDeleted) throw new Error();

    return res.json({
      error: false,
      message: "URL deletada com sucesso!",
    });
  } catch {
    return res.status(400).json({
      error: true,
      message: "Não foi possível deletar a URL",
    });
  }
});

module.exports = router;
