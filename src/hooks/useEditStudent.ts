'use client'
import { useCallback, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { studentService } from '@/services/userService'
import { StudentEdit } from '@/types/index'
import { toast } from 'react-toastify'
import { handleApiError } from '@/utils/handleError'

export const useEditStudent = () => {
    const router = useRouter()
    const params = useParams()
    const [student, setStudent] = useState<StudentEdit | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchStudent = useCallback(async () => {
        try {
            const data = await studentService.getById(params.id as string)
            setStudent({ ...data, password: '' })
        } catch (err) {
            handleApiError(err, 'Ma’lumotni yuklab bo‘lmadi!')
        } finally {
            setLoading(false)
        }
    }, [params.id])

    useEffect(() => {
        fetchStudent()
    }, [fetchStudent])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement
        const { name, value } = target
        const isCheckbox = target instanceof HTMLInputElement && target.type === 'checkbox'
        const checked = isCheckbox ? target.checked : undefined
        setStudent((prev) => ({ ...prev!, [name]: isCheckbox ? checked : value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!student) return
        try {
            await studentService.update(params.id as string, student)
            toast.success('Student ma’lumotlari yangilandi!')
            setTimeout(() => router.push('/admin/students'), 1000)
        } catch (err) {
            handleApiError(err, 'Yangilashda xatolik yuz berdi!')
        }
    }

    return { loading, student, router, handleChange, handleSubmit }
}
