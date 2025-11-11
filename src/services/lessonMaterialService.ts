import API from '@/lib/axios'
import { LessonMaterial, LessonMaterialPayload } from '@/types'

export const lessonMaterialService = {
    async getAll(lessonId: string): Promise<LessonMaterial[]> {
        const res = await API.get(`/api/lesson_material/lesson/${lessonId}`)
        return res.data.result
    },

    async getById(id: string): Promise<LessonMaterial> {
        const res = await API.get(`/api/lesson_material/${id}`)
        return res.data.result
    },

    async create(lessonId: string, data: LessonMaterialPayload): Promise<void> {
        await API.post(`/api/lesson_material/lesson/${lessonId}`, data)
    },

    async update(id: string, data: LessonMaterialPayload): Promise<void> {
        await API.patch(`/api/lesson_material/${id}`, data)
    },

    async delete(id: string): Promise<void> {
        await API.delete(`/api/lesson_material/${id}`)
    },
}
