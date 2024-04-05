import { api } from '@/lib/aixos'

export type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
