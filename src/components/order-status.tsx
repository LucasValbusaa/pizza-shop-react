export type OrderStatusText =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

type OrderStatusProps = {
  status: OrderStatusText
}

const orderStatusMap: Record<
  OrderStatusText,
  { value: string; color: string }
> = {
  pending: {
    value: 'Pendente',
    color: 'bg-slate-400',
  },
  canceled: {
    value: 'Cancelado',
    color: 'bg-rose-500',
  },
  delivered: {
    value: 'Entregue',
    color: 'bg-emerald-500',
  },
  delivering: {
    value: 'Em entrega',
    color: 'bg-amber-500',
  },
  processing: {
    value: 'Em preparo',
    color: 'bg-amber-500',
  },
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${orderStatusMap[status].color}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status].value}
      </span>
    </div>
  )
}
