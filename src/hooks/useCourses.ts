import { useCallback, useState } from 'react'
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
            const res = await courseService.list()
            const data = res.data?.result ?? res.data ?? []
            setCourses(data)
        } catch (err: unknown) {
            handleAxiosError(err, 'Courselarni yuklashda xatolik')
        } finally {
            setLoading(false)
        }
    }, [])

    const createCourse = async (payload: CreateCourse) => {
        try {
            const res = await courseService.create(payload)
            toast.success('Course yaratildi')
            await fetchCourses()
            return res
        } catch (err: unknown) {
            handleAxiosError(err, 'Course yaratishda xatolik')
            throw err
        }
    }

    const updateCourse = async (id: string | number, payload: UpdateCourse) => {
        try {
            const res = await courseService.update(id, payload)
            toast.success('Course yangilandi')
            await fetchCourses()
            return res
        } catch (err: unknown) {
            handleAxiosError(err, 'Yangilashda xatolik')
            throw err
        }
    }

    const deleteCourse = async (id: string | number) => {
        try {
            await courseService.remove(id)
            toast.success('Course o‘chirildi')
            await fetchCourses()
        } catch (err: unknown) {
            handleAxiosError(err, 'O‘chirishda xatolik')
            throw err
        }
    }

    return {
        courses,
        loading,
        error,
        fetchCourses,
        createCourse,
        updateCourse,
        deleteCourse,
    }
}
