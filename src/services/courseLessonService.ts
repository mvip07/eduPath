import API from '@/lib/axios'
import { Lesson, LessonPayload } from '@/types'

export const courseLessonService = {
    async getAll(moduleId: string): Promise<Lesson[]> {
        const res = await API.get(`/api/lesson/course_module/${moduleId}`)
        return res.data.result
    },

    async getById(lessonId: string): Promise<Lesson> {
        const res = await API.get(`/api/lesson/${lessonId}`)
        return res.data.result
    },

    async create(moduleId: string, data: LessonPayload): Promise<void> {
        await API.post(`/api/lesson/course_module/${moduleId}`, data)
    },

    async update(moduleId: string, data: LessonPayload): Promise<void> {
        await API.patch(`/api/lesson/${moduleId}`, data)
    },

    async delete(lessonId: string): Promise<void> {
        await API.delete(`/api/lesson/${lessonId}`)
    },
}
