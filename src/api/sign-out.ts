import { api } from '@/lib/aixos'

export async function signOut() {
  await api.post('/sign-out')
}
