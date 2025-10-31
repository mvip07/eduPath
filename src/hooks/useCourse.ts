import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Module, Lesson, CreateModule, UpdateModule } from '@/types'
import API from '@/utils/API'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

export const useCourse = (courseId?: string | number) => {
    const [modules, setModules] = useState<Module[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleAxiosError = (err: unknown, defaultMsg: string) => {
        const axiosErr = err as AxiosError<{ message?: string }>
        const msg = axiosErr.response?.data?.message ?? defaultMsg
        setError(msg)
        toast.error(msg)
    }

    const fetchModules = useCallback(async () => {
        if (!courseId) return
        setLoading(true)
        try {
            const res = await API.get(`/api/course_module/course/${courseId}`)
            setModules(res.data.result)
        } catch (err) {
            handleAxiosError(err, 'Module yaratishda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [courseId])

    const fetchModule = useCallback(async (courseId: string): Promise<Module | null> => {
        setLoading(true)
        try {
            const res = await API.get(`/api/course_module/${courseId}`)
            return res.data.result
        } catch (err) {
            handleAxiosError(err, 'Ma’lumotni yuklab bo‘lmadi!')
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    const createModule = async (e: FormEvent, module: CreateModule) => {
        e.preventDefault()
        setLoading(true)
        try {
            await API.post(`/api/course_module/course/${courseId}`, module)
            toast.success('Module yaratildi')
            await fetchModules()
        } catch (err) {
            handleAxiosError(err, 'Module yaratishda xatolik!')
        } finally {
            setLoading(false)
        }
    }

    const updateModule = async (moduleId: string, module: UpdateModule) => {
        if (!module) return
        setLoading(true)
        try {
            const res = API.patch(`/api/course_module/${moduleId}`, module)
            toast.success('Module yangilandi')
            await fetchModules()
            return res
        } catch (err: unknown) {
            handleAxiosError(err, 'Yangilashda xatolik')
        } finally {
            setLoading(false)
        }
    }

    const deleteModule = async (moduleId: string) => {
        setLoading(true)
        try {
            await API.delete(`/api/course_module/${moduleId}`)
            toast.success('Module o‘chirildi')
            await fetchModules()
        } catch (err: unknown) {
            handleAxiosError(err, 'O‘chirishda xatolik')
        } finally {
            setLoading(false)
        }
    }

    const createLesson = async (moduleId: string | number, payload: Partial<Lesson>) => {
        const res = await API.post(`/api/course/${courseId}/modules/${moduleId}/lessons`, payload)
        toast.success('Dars yaratildi')
        await fetchModules()
        return res
    }

    const updateLesson = async (moduleId: string | number, lessonId: string | number, payload: Partial<Lesson>) => {
        const res = await API.patch(`/api/course/${courseId}/modules/${moduleId}/lessons/${lessonId}`, payload)
        toast.success('Dars yangilandi')
        await fetchModules()
        return res
    }

    const deleteLesson = async (moduleId: string | number, lessonId: string | number) => {
        await API.delete(`/api/course/${courseId}/modules/${moduleId}/lessons/${lessonId}`)
        toast.success('Dars o‘chirildi')
        await fetchModules()
    }

    useEffect(() => {
        fetchModules()
    }, [fetchModules])

    return { modules, loading, error, fetchModule, fetchModules, createModule, updateModule, deleteModule, createLesson, updateLesson, deleteLesson }
}
