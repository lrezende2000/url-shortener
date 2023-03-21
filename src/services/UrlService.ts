import * as yup from 'yup'
import { Prisma } from '@prisma/client'

import { createUrlSchema } from '../schemas/urlSchemas'
import { client } from '../database/client'

export const createUrl = async (body: yup.InferType<typeof createUrlSchema>) => {
  const data = await createUrlSchema.validate(body)

  const createdUrl = await client.url.create({ data })

  return createdUrl
}

export const getUrl = async (id: string) => {
  const url = await client.url.findUnique({ where: { id } })

  return url?.realLink
}

export const listUrl = async (filters: Prisma.urlWhereInput) => {
  const urls = await client.url.findMany({ where: filters })

  return urls
}
