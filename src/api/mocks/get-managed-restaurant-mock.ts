import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: '1',
    name: 'Pizza Shop',
    createdAt: new Date(),
    description: 'A nice restaurant',
    updatedAt: new Date(),
    managerId: 'custom-manager-id',
  })
})
