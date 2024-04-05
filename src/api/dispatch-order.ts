import { api } from '@/lib/aixos'

export type DispatchOrderParams = {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
