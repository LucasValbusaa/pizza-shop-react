import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './aprrove-order-moc'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-oder-mock'
import { dispatchOrderMock } from './dispatch-order'
import { getDailyRevenueInPeriodMock } from './get-daily-reveneu-in-period-mock'
import { getDaysOrdersAmountMock } from './get-days-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthsCancelOrdersMock } from './get-month-cancel-orders-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getMonthsOrdersAmountMock } from './get-months-order-amount-mock'
import { getOrderDetailsMock } from './get-orders-detail-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantsMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantsMock,
  getDaysOrdersAmountMock,
  getMonthsOrdersAmountMock,
  getMonthsCancelOrdersMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getManagedRestaurantMock,
  getProfileMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMWS() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
