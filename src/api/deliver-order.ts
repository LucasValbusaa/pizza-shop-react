import { api } from '@/lib/aixos'

export type DeliverOrderParams = {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
