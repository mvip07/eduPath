import { toast } from 'react-toastify'

export const handleApiError = (err: unknown, message?: string): void => {
    if (err instanceof Error) {
        toast.error(message || err.message)
    } else {
        toast.error(message || 'Xatolik yuz berdi!')
    }
}

export const redirectToLogin = (): void => {
    if (typeof window !== 'undefined') {
        window.location.href = '/auth/login'
    }
}
