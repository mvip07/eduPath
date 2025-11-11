import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import API from '@/lib/axios'
import { Module, ModuleEdit } from '@/types'
import { handleApiError } from '@/lib/helpers/handleApiError'

export const useCourse = (courseId?: string) => {
    const [modules, setModules] = useState<Module[]>([])
    const [loading, setLoading] = useState(false)

    const fetchModules = useCallback(async () => {
        if (!courseId) return
        setLoading(true)
        try {
            const res = await API.get(`/api/course_module/course/${courseId}`)
            setModules(res.data.result)
        } catch (err) {
            handleApiError(err, 'Module yaratishda xatolik!')
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
            handleApiError(err, 'Ma’lumotni yuklab bo‘lmadi!')
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    const createModule = useCallback( async (module: ModuleEdit) => {
        setLoading(true)
        try {
            await API.post(`/api/course_module/course/${courseId}`, module)
            toast.success('Module yaratildi')
            await fetchModules()
        } catch (err) {
            handleApiError(err, 'Module yaratishda xatolik!')
        } finally {
            setLoading(false)
        }
    },[courseId, fetchModules])

    const updateModule = useCallback( async (moduleId: string, module: ModuleEdit) => {
        if (!module) return
        setLoading(true)
        try {
            await API.patch(`/api/course_module/${moduleId}`, module)
            toast.success('Module yangilandi')
            await fetchModules()
        } catch (err) {
            handleApiError(err, 'Yangilashda xatolik')
        } finally {
            setLoading(false)
        }
    }, [fetchModules])

    const deleteModule = useCallback(async (moduleId: string) => {
        setLoading(true)
        try {
            await API.delete(`/api/course_module/${moduleId}`)
            toast.success('Module o‘chirildi')
            await fetchModules()
        } catch (err) {
            handleApiError(err, 'O‘chirishda xatolik')
        } finally {
            setLoading(false)
        }
    },[fetchModules])

    useEffect(() => {
        fetchModules()
    }, [fetchModules])

    return { modules, loading, fetchModule, fetchModules, createModule, updateModule, deleteModule }
}
