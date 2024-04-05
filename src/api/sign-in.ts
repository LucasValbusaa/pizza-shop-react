import { api } from '@/lib/aixos'

export type SignInBody = {
  email: string
}

export async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
