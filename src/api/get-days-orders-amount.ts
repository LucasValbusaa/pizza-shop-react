import { api } from '@/lib/aixos'

export type GetDaysOrderResponse = {
  amount: number
  diffFromYesterday: number
}

export async function getDaysOrdersAmount() {
  const response = await api.get<GetDaysOrderResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
