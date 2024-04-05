import { api } from '@/lib/aixos'

export type GetMonthOrdersAmountResponse = {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmounts() {
  const response = await api.get<GetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
