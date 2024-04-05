import { http, HttpResponse } from 'msw'

import { GetDaysOrderResponse } from '../get-days-orders-amount'

export const getDaysOrdersAmountMock = http.get<
  never,
  never,
  GetDaysOrderResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
