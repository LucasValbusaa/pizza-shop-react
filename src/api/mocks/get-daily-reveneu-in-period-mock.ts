import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2021', receipt: 1000 },
    { date: '02/01/2021', receipt: 2000 },
    { date: '03/01/2021', receipt: 3000 },
    { date: '04/01/2021', receipt: 4000 },
    { date: '05/01/2021', receipt: 5000 },
    { date: '06/01/2021', receipt: 6000 },
    { date: '07/01/2021', receipt: 7000 },
  ])
})
