'use client'
import { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { studentService } from '@/services/userService'
import { CreateStudent } from '@/types/index'
import { toast } from 'react-toastify'
import { handleApiError } from '@/utils/handleError'

export const useRegister = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<CreateStudent>({
        active_term: 0,
        full_name: '',
        password: '',
        phone_number: '',
        role: 'STUDENT',
        username: '',
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await studentService.create(formData)
            toast.success('Successfully registered!')
            router.push('/admin/students')
        } catch (err) {
            handleApiError(err, 'Registration failed!')
        } finally {
            setLoading(false)
        }
    }

    return { formData, handleChange, handleSubmit, loading }
}
