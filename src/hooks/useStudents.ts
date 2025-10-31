'use client'
import { useState, useCallback, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { handleApiError } from '@/utils/handleError'
import { studentService } from '@/services/userService'
import { CreateStudent, Student, StudentEdit } from '@/types/index'
import { setToken } from '@/utils/storage'

export const useStudents = () => {
    const router = useRouter()

    // 🔹 States
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(false)

    // 🔹 GET ALL
    const fetchStudents = useCallback(async () => {
        setLoading(true)
        try {
            const data = await studentService.getAll()
            setStudents(data)
        } catch (err) {
            handleApiError(err, 'Studentlarni yuklashda xatolik yuz berdi!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchStudent = useCallback(async (id: string): Promise<StudentEdit | null> => {
        setLoading(true)
        try {
            const data = await studentService.getById(id)
            return data
        } catch (err) {
            handleApiError(err, 'Ma’lumotni yuklab bo‘lmadi!')
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    // 🔹 CREATE
    const handleCreate = async (e: FormEvent, student: CreateStudent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await studentService.create(student)
            toast.success('Student muvaffaqiyatli ro‘yxatdan o‘tkazildi!')
        } catch (err) {
            handleApiError(err, 'Ro‘yxatdan o‘tishda xatolik!')
        } finally {
            setLoading(false)
        }
    }

    // 🔹 EDIT
    const handleUpdate = async (e: FormEvent, id: string, student: StudentEdit) => {
        e.preventDefault()
        if (!student) return
        setLoading(true)
        try {
            const { active_term, full_name, is_active, phone_number, role, username, password } = student
            const payload: Partial<StudentEdit> = { active_term, full_name, is_active, phone_number, role, username, password }
            await studentService.update(id, payload as StudentEdit)
            toast.success('Student ma’lumotlari yangilandi!')
        } catch (err) {
            handleApiError(err, 'Yangilashda xatolik!')
        } finally {
            setLoading(false)
        }
    }

    // 🔹 DELETE
    const handleDelete = async (id: string) => {
        setLoading(true)
        try {
            await studentService.delete(id)
            toast.success('Student muvaffaqiyatli o‘chirildi!')
            fetchStudents()
        } catch (err) {
            handleApiError(err, 'O‘chirishda xatolik yuz berdi!')
        } finally {
            setLoading(false)
        }
    }

    // 🔹 LOGIN
    const loginSubmit = async (e: FormEvent, username: string, password: string) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await studentService.login(username, password)
            setToken(res)
            toast.success('Login muvaffaqiyatli!')
            const role = res.role
            router.push(role === 'ADMIN' ? '/admin' : '/student')
        } catch (err) {
            handleApiError(err, 'Login yoki parol xato!')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchStudents()
    }, [fetchStudents])

    return {
        loading,
        students,
        setLoading,
        handleCreate,
        handleUpdate,
        handleDelete,
        loginSubmit,
        fetchStudent,
        fetchStudents,
    }
}
