const { createUrlSchema } = require("../schemas/urlSchemas");
const { client } = require("../database/client");

const createUrl = async (body) => {
  const data = await createUrlSchema.validate(body);

  const createdUrl = await client.url.create({ data });

  return createdUrl;
};

const getUrl = async (id) => {
  const url = await client.url.findUnique({ where: { id } });

  return url?.realLink;
};

const listUrl = async (filters) => {
  const urls = await client.url.findMany({ where: filters });

  return urls;
};

module.exports = {
  createUrl,
  getUrl,
  listUrl,
};
