import API from '@/utils/API'
import { CreateStudent, Student, StudentEdit } from '@/types/index'

export const studentService = {
    async getAll(): Promise<Student[]> {
        const res = await API.get('/api/user/')
        return res.data.result
    },
    async getById(id: string | number): Promise<StudentEdit> {
        const res = await API.get(`/api/user/${id}`)
        return res.data.result
    },
    async create(data: CreateStudent): Promise<void> {
        await API.post('/api/user/', data)
    },
    async update(id: string | number, data: StudentEdit): Promise<void> {
        await API.patch(`/api/user/${id}`, data)
    },
    async delete(id: string | number): Promise<void> {
        await API.delete(`/api/user/${id}`)
    },
}
