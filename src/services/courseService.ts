import API from '@/utils/API'
import { CreateCourse, UpdateCourse } from '@/types'

const base = '/api/course'

export const courseService = {
    list: () => API.get(`${base}/`),
    create: (payload: CreateCourse) => API.post(`${base}/`, payload),
    remove: (courseId: string | number) => API.delete(`${base}/${courseId}`),
    getOne: (courseId: string | number) => API.get(`${base}/${courseId}`),
    update: (courseId: string | number, payload: UpdateCourse) => API.patch(`${base}/${courseId}`, payload),
}
