import { render } from '@testing-library/react'

import { OrderStatus, OrderStatusText } from './order-status'

type Case = {
  status: OrderStatusText
  text: string
  color: string
}

const cases: Case[] = [
  {
    status: 'pending',
    text: 'Pendente',
    color: 'bg-slate-400',
  },
  {
    status: 'canceled',
    text: 'Cancelado',
    color: 'bg-rose-500',
  },
  {
    status: 'delivered',
    text: 'Entregue',
    color: 'bg-emerald-500',
  },
  {
    status: 'delivering',
    text: 'Em entrega',
    color: 'bg-amber-500',
  },
  {
    status: 'processing',
    text: 'Em preparo',
    color: 'bg-amber-500',
  },
]

describe('Order Status', () => {
  test.each(cases)(
    'should display a span with text $status and span with a class $color',
    (data) => {
      const wrapper = render(<OrderStatus status={data.status} />)

      // wrapper.debug()

      const statusText = wrapper.getByText(data.text)
      const badgeElement = wrapper.getByTestId('badge')

      expect(statusText).toBeInTheDocument()
      expect(badgeElement).toHaveClass(data.color)
    },
  )
})
