import { api } from '@/lib/aixos'

export type CancelOrderParams = {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
