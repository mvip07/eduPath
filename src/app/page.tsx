"use client"
import { getUserFromStorage } from '@/utils/storage'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        const user = getUserFromStorage()

        if (user) {
            try {
                if (user.role === 'ADMIN') {
                    router.replace('/admin')
                } else if (user.role === 'STUDENT') {
                    router.replace('/student')
                }
            } catch {
                router.replace('/auth/login')
            }
        } else {
            router.replace('/auth/login')
        }
    }, [router])
    return <h1>Hello World</h1>
}
