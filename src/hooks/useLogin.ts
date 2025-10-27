'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import API from '@/utils/API'
import { toast } from 'react-toastify'
import { setToken } from '@/utils/storage'
import { handleApiError } from '@/utils/handleError'

export function useLogin() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [login, setLogin] = useState({ username: '', password: '' })

    const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLogin((prev) => ({ ...prev, [name]: value }))
    }

    const loginSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await API.post('/api/auth/login', login)
            setToken(res.data.result)
            toast.success('Login successful!')
            const role = res.data.result.role
            router.push(role === 'ADMIN' ? '/admin' : '/student')
        } catch (err) {
            handleApiError(err, 'Login yoki parol xato!')
        } finally {
            setLoading(false)
        }
    }

    return { loading, handleLogin, loginSubmit }
}
