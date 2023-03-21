import * as yup from 'yup'

export const createUrlSchema = yup.object().shape({
  realLink: yup.string().required('Link é obrigatório').typeError('Link deve ser uma string')
})

export const listUrlSchema = yup.object().shape({
  id: yup.string(),
  date: yup.date()
}).noUnknown()
