import api from '@/app/api'

interface LoginCredentials {
  email: string
  password: string
}

interface SignupCredentials extends LoginCredentials {
  name: string
}

interface User {
  id: string
  email: string
  name: string
}

interface AuthResponse {
  token: string
  user: User
}

interface VerifyEmailResponse {
  success: boolean
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/login', credentials)
    return data
};

export const signup = async (credentials: SignupCredentials): Promise<void> => {
    await api.post('/auth/register', credentials)
};

export const resetPassword = async (email: string): Promise<void> => {
    await api.post('/auth/reset-password', { email })
};

export const verifyEmail = async (token: string): Promise<VerifyEmailResponse> => {
    const { data } = await api.get<VerifyEmailResponse>('/auth/verify-email', { params: { token } })
    return data
};
