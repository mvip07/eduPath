import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Course, CreateCourse, UpdateCourse } from '@/types'
import { courseService } from '@/services/courseService'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

export const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleAxiosError = (err: unknown, defaultMsg: string) => {
        const axiosErr = err as AxiosError<{ message?: string }>
        const msg = axiosErr.response?.data?.message ?? defaultMsg
        setError(msg)
        toast.error(msg)
    }

    const fetchCourses = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await courseService.getAll()
            setCourses(res)
        } catch (err: unknown) {
            handleAxiosError(err, 'Courselarni yuklashda xatolik')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchCourse = useCallback(async (id: string): Promise<Course | null> => {
        setLoading(true)
        try {
            const data = await courseService.getById(id)
            return data
        } catch (err) {
            handleAxiosError(err, 'Ma’lumotni yuklab bo‘lmadi!')
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    const createCourse = async (e: FormEvent, course: CreateCourse) => {
        e.preventDefault()
        if (!course) return
        setLoading(true)
        try {
            await courseService.create(course)
            toast.success('Course yaratildi')
        } catch (err) {
            handleAxiosError(err, 'Course yaratishda xatolik')
        } finally {
            setLoading(false)
        }
    }

    const updateCourse = async (id: string, payload: UpdateCourse) => {
        try {
            const res = await courseService.update(id, payload)
            toast.success('Course yangilandi')
            await fetchCourses()
            return res
        } catch (err: unknown) {
            handleAxiosError(err, 'Yangilashda xatolik')
        }
    }

    const deleteCourse = async (id: string | number) => {
        try {
            await courseService.delete(id)
            toast.success('Course o‘chirildi')
            await fetchCourses()
        } catch (err: unknown) {
            handleAxiosError(err, 'O‘chirishda xatolik')
        }
    }

    useEffect(() => {
        fetchCourses()
    }, [fetchCourses])

    return {
        courses,
        loading,
        error,
        fetchCourse,
        fetchCourses,
        createCourse,
        updateCourse,
        deleteCourse,
    }
}
