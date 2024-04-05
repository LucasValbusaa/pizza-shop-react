import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '123456789',
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'manager',
    })
  },
)
