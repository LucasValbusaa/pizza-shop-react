import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-product'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {
      product: 'Pizza 01',
      amount: 100,
    },
    {
      product: 'Pizza 02',
      amount: 200,
    },
    {
      product: 'Pizza 03',
      amount: 300,
    },
    {
      product: 'Pizza 04',
      amount: 400,
    },
    {
      product: 'Pizza 05',
      amount: 500,
    },
  ])
})
