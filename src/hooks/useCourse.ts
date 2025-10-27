import { useCallback, useEffect, useState } from 'react'
import { Course, Module, Lesson } from '@/types'
import API from '@/utils/API'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

export const useCourse = (courseId?: string | number) => {
    const [course, setCourse] = useState<Course | null>(null)
    const [modules, setModules] = useState<Module[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchCourse = useCallback(async () => {
        if (!courseId) return
        setLoading(true)
        try {
            const res = await API.get(`/api/course/${courseId}`)
            const data = res.data?.result ?? res.data
            setCourse(data)

            if (data?.modules) {
                setModules(data.modules)
            } else {
                const modRes = await API.get(`/api/course/${courseId}/modules`).catch(() => null)
                if (modRes) setModules(modRes.data?.result ?? modRes.data ?? [])
            }
        } catch (err: unknown) {
            const axiosErr = err as AxiosError<{ message?: string }>
            const msg = axiosErr.response?.data?.message ?? 'Course yuklashda xatolik'
            setError(msg)
            toast.error(msg)
        } finally {
            setLoading(false)
        }
    }, [courseId])

    const createModule = async (payload: Partial<Module>) => {
        const res = await API.post(`/api/course/${courseId}/modules`, payload)
        toast.success('Module yaratildi')
        await fetchCourse()
        return res
    }

    const updateModule = async (moduleId: string | number, payload: Partial<Module>) => {
        const res = await API.patch(`/api/course/${courseId}/modules/${moduleId}`, payload)
        toast.success('Module yangilandi')
        await fetchCourse()
        return res
    }

    const deleteModule = async (moduleId: string | number) => {
        await API.delete(`/api/course/${courseId}/modules/${moduleId}`)
        toast.success('Module o‘chirildi')
        await fetchCourse()
    }

    const createLesson = async (moduleId: string | number, payload: Partial<Lesson>) => {
        const res = await API.post(`/api/course/${courseId}/modules/${moduleId}/lessons`, payload)
        toast.success('Dars yaratildi')
        await fetchCourse()
        return res
    }

    const updateLesson = async (moduleId: string | number, lessonId: string | number, payload: Partial<Lesson>) => {
        const res = await API.patch(`/api/course/${courseId}/modules/${moduleId}/lessons/${lessonId}`, payload)
        toast.success('Dars yangilandi')
        await fetchCourse()
        return res
    }

    const deleteLesson = async (moduleId: string | number, lessonId: string | number) => {
        await API.delete(`/api/course/${courseId}/modules/${moduleId}/lessons/${lessonId}`)
        toast.success('Dars o‘chirildi')
        await fetchCourse()
    }

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    return { course, modules, loading, error, fetchCourse, createModule, updateModule, deleteModule, createLesson, updateLesson, deleteLesson }
}
