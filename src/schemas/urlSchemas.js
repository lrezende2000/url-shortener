const yup = require("yup");

const createUrlSchema = yup.object().shape({
  realLink: yup
    .string()
    .required("Link é obrigatório")
    .url("Link deve ser uma URL válida")
    .typeError("Link deve ser uma string"),
});

const listUrlSchema = yup
  .object()
  .shape({
    id: yup.string(),
    date: yup.date(),
  })
  .noUnknown();

module.exports = {
  createUrlSchema,
  listUrlSchema,
};
