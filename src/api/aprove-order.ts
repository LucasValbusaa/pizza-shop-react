import { api } from '@/lib/aixos'

export type AproveOrderParams = {
  orderId: string
}

export async function aproveOrder({ orderId }: AproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
