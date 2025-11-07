import { StoredAuth } from '@/types'

const TOKEN_KEY = process.env.NEXT_PUBLIC_EDUPATH_TOKEN || 'EDUPATH_TOKEN'

export const getToken = (): string => {
    if (typeof window === 'undefined') return ''
    const stored = localStorage.getItem(TOKEN_KEY!)
    if (!stored) return ''
    try {
        const parsed = JSON.parse(stored)
        return parsed?.access_token || ''
    } catch {
        return ''
    }
}

export const clearToken = () => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(TOKEN_KEY)
}

export const setToken = (tokenData: unknown): void => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenData))
}

export const getUserFromStorage = (): StoredAuth | null => {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(TOKEN_KEY)
    if (!stored) return null
    try {
        const parsed = JSON.parse(stored) as StoredAuth
        return parsed || null
    } catch {
        return null
    }
}