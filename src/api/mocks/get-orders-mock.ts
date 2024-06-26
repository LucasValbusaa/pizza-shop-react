import { http, HttpResponse } from 'msw'

import { GetOrdersResponse } from '../get-orders'

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'canceled',
  'delivered',
  'delivering',
]

const orders: Orders = Array.from({ length: 60 }).map((_, index) => {
  return {
    orderId: `order-${index + 1}`,
    customerName: `Customer ${index + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[index % statuses.length],
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filterOrders = orders

    if (customerName) {
      filterOrders = filterOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filterOrders = filterOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filterOrders = filterOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filterOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filterOrders.length,
      },
    })
  },
)
