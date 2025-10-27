"use client";
import { useEffect } from 'react'
import { useRouter } from "next/navigation";

export default function Auth() {
    const router = useRouter()
    useEffect(() => {
        const storage = localStorage.getItem(process.env.NEXT_PUBLIC_PROJECT_STORAGE!)

        if (storage) {
            router.replace('/')
        } else {
        }
        router.replace('/auth/login')
    }, [router])
}
