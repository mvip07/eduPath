import API from '@/lib/axios'
import { CourseContent, CourseContentEdit } from '@/types'

export const courseContentService = {
    async getAll(courseId: string): Promise<CourseContent[]> {
        const res = await API.get(`/api/course_content/course/${courseId}`)
        return res.data.result
    },

    async getById(id: string): Promise<CourseContent> {
        const res = await API.get(`/api/course_content/${id}`)
        return res.data.result
    },

    async getCount(id: string): Promise<{
        lesson_count: number
        course_module_count: number
        course_content_count: number
        lesson_total_duration: string
    }> {
        const res = await API.get(`/api/course/counts/${id}`)
        return res.data.result
    },

    async create(courseId: string, data: CourseContentEdit) {
        await API.post(`/api/course_content/course/${courseId}`, data)
    },

    async update(id: string, data: CourseContentEdit) {
        await API.patch(`/api/course_content/${id}`, data)
    },

    async delete(id: string) {
        await API.delete(`/api/course_content/${id}`)
    },
}
