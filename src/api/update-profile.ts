import { api } from '@/lib/aixos'

export type UpdateProfileBody = {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  await api.put('/profile', { name, description })
}
