import { Type, TypeEdit } from '@/types'
import API from '@/lib/axios'

export const typeService = {
    async getAll(): Promise<Type[]> {
        const res = await API.get('/api/type/')
        return res.data.result
    },

    async getById(id: string): Promise<Type> {
        const res = await API.get(`/api/type/${id}`)
        return res.data.result
    },

    async create(data: TypeEdit): Promise<void> {
        await API.post('/api/type/', data)
    },

    async update(id: string, data: TypeEdit): Promise<void> {
        await API.patch(`/api/type/${id}`, data)
    },

    async delete(id: string | number): Promise<void> {
        await API.delete(`/api/type/${id}`)
    },
}