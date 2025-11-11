'use client'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { CourseContent, CourseContentEdit } from '@/types'
import { handleApiError } from '@/lib/helpers/handleApiError'
import { courseContentService } from '@/services/courseContentService'

export const useCourseContent = (courseId?: string) => {
    const [contents, setContents] = useState<CourseContent[]>([])
    const [count, setCount] = useState({
        lesson_count: 0,
        course_module_count: 0,
        course_content_count: 0,
        lesson_total_duration: '0',
    })
    const [loading, setLoading] = useState(false)

    const fetchContents = useCallback(async () => {
        if (!courseId) return
        setLoading(true)
        try {
            const res = await courseContentService.getAll(courseId)
            setContents(res)
        } catch (err) {
            handleApiError(err, 'Ma’lumotni yuklashda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [courseId])

    const fetchContent = useCallback(async (id: string) => {
        setLoading(true)
        try {
            return await courseContentService.getById(id)
        } catch (err) {
            handleApiError(err, 'Ma’lumotni yuklab bo‘lmadi!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchCount = useCallback(async () => {
        if (!courseId) return
        setLoading(true)
        try {
            const res = await courseContentService.getCount(courseId)
            setCount(res)
        } catch (err) {
            handleApiError(err, 'Ma’lumotni yuklab bo‘lmadi!')
        } finally {
            setLoading(false)
        }
    }, [courseId])

    const createContent = useCallback(
        async (data: CourseContentEdit) => {
            console.log('::::::::::::', courseId)
            if (!courseId) return
            setLoading(true)
            try {
                await courseContentService.create(courseId, data)
                toast.success('Content yaratildi')
                await fetchContents()
            } catch (err) {
                handleApiError(err, 'Yaratishda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [courseId, fetchContents]
    )

    const updateContent = useCallback(
        async (id: string, data: CourseContentEdit) => {
            setLoading(true)
            try {
                await courseContentService.update(id, data)
                toast.success('Content yangilandi')
                await fetchContents()
            } catch (err) {
                handleApiError(err, 'Yangilashda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchContents]
    )

    const deleteContent = useCallback(
        async (id: string) => {
            setLoading(true)
            try {
                await courseContentService.delete(id)
                toast.success('Content o‘chirildi')
                await fetchContents()
            } catch (err) {
                handleApiError(err, 'O‘chirishda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchContents]
    )

    useEffect(() => {
        fetchCount()
        fetchContents()
    }, [fetchContents, fetchCount])

    return { contents, count, loading, fetchCount, fetchContent, createContent, updateContent, deleteContent }
}
