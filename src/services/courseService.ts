import API from '@/utils/API'
import { Course, CreateCourse, UpdateCourse } from '@/types'

export const courseService = {
    async getAll(): Promise<Course[]> {
        const res = await API.get('/api/course/')
        return res.data.result
    },

    async getById(id: string): Promise<Course> {
        const res = await API.get(`/api/course/${id}`)
        return res.data.result
    },

    async create(data: CreateCourse): Promise<void> {
        await API.post('/api/course/', data)
    },

    async update(id: string, data: UpdateCourse): Promise<void> {
        await API.patch(`/api/course/${id}`, data)
    },

    async delete(id: string | number): Promise<void> {
        await API.delete(`/api/course/${id}`)
    },
}
