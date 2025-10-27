'use client'
import API from '@/utils/API'
import { useRouter, usePathname } from 'next/navigation'
import { getToken, getUserFromStorage, clearToken } from '@/utils/storage'
import React, { createContext, useContext, useEffect } from 'react'

const AuthContext = createContext<undefined>(undefined)
export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const token = getToken()
        const localUser = getUserFromStorage()

        if (!token || !localUser) {
            clearToken()
            router.replace('/auth/login')
            return
        }

        const isAdminPage = pathname.startsWith('/admin')
        if (isAdminPage && localUser.role === 'STUDENT') {
            router.replace('/student')
            return
        }
    }, [router, pathname])

    useEffect(() => {
        const interceptor = API.interceptors.response.use(
            (res) => res,
            (error) => {
                if (error?.response?.status === 401) {
                    clearToken()
                    router.replace('/auth/login')
                }
                return Promise.reject(error)
            }
        )
        return () => {
            API.interceptors.response.eject(interceptor)
        }
    }, [router])

    return <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
}
