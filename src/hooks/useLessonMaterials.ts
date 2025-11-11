import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { handleApiError } from '@/lib/helpers/handleApiError'
import { LessonMaterial, LessonMaterialPayload } from '@/types'
import { lessonMaterialService } from '@/services/lessonMaterialService'

export const useLessonMaterials = (lessonId?: string) => {
    const [materials, setMaterials] = useState<LessonMaterial[]>([])
    const [loading, setLoading] = useState(false)

    const fetchMaterials = useCallback(async () => {
        if (!lessonId) return
        setLoading(true)
        try {
            const res = await lessonMaterialService.getAll(lessonId)
            setMaterials(res)
        } catch (err) {
            handleApiError(err, 'Lesson materiallarni olib kelishda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [lessonId])

    const fetchMaterial = useCallback(async (materialId: string) => {
        if (!lessonId) return
        setLoading(true)
        try {
            return await lessonMaterialService.getById(materialId)
        } catch (err) {
            handleApiError(err, 'Lesson materiallarni olib kelishda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [lessonId])

    const createMaterial = useCallback( async (data: LessonMaterialPayload) => {
        if (!lessonId) return
        setLoading(true)
        try {
            await lessonMaterialService.create(lessonId, data)
            toast.success('Material qo‘shildi')
            await fetchMaterials()
        } catch (err) {
            handleApiError(err, 'Material yaratishda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [lessonId, fetchMaterials])

    const updateMaterial = useCallback(async (id: string, data: LessonMaterialPayload) => {
        setLoading(true)
        try {
            await lessonMaterialService.update(id, data)
            toast.success('Material o‘zgartirildi')
            await fetchMaterials()
        } catch (err) {
            handleApiError(err, 'Material o‘zgartirishda xatolik!')
        } finally {
            setLoading(false)
        }
    },[fetchMaterials])

    const deleteMaterial = useCallback( async (id: string) => {
        setLoading(true)
        try {
            await lessonMaterialService.delete(id)
            toast.success('Material o‘chirildi')
            await fetchMaterials()
        } catch (err) {
            handleApiError(err, 'Material o‘chirishda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [fetchMaterials])

    useEffect(() => {
        fetchMaterials()
    }, [fetchMaterials])

    return { loading, materials, fetchMaterial, fetchMaterials, createMaterial, updateMaterial, deleteMaterial }
}