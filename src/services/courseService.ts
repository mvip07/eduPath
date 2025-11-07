import API from '@/lib/axios'
import { Course, CourseEdit } from '@/types'

export const courseService = {
    async getAll(): Promise<Course[]> {
        const res = await API.get('/api/course/')
        return res.data.result
    },

    async getById(id: string): Promise<CourseEdit> {
        const res = await API.get(`/api/course/${id}`)
        return res.data.result
    },

    async create(data: CourseEdit): Promise<void> {
        await API.post('/api/course/', data)
    },

    async update(id: string, data: CourseEdit): Promise<void> {
        await API.patch(`/api/course/${id}`, data)
    },

    async delete(id: string | number): Promise<void> {
        await API.delete(`/api/course/${id}`)
    },
}
