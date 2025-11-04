'use client'
import { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { handleApiError } from '@/utils/handleError'
import { typeService } from '@/services/typeService'
import { Type, TypeEdit } from '@/types'

export const useTypes = () => {
    // 🔹 States
    const [types, setTypes] = useState<Type[]>([])
    const [loading, setLoading] = useState(false)

    // 🔹 GET ALL
    const fetchTypes = useCallback(async () => {
        setLoading(true)
        try {
            const data = await typeService.getAll()
            setTypes(data)
        } catch (err) {
            handleApiError(err, 'Typeslar yuklashda xatolik yuz berdi!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchType = useCallback(async (id: string): Promise<TypeEdit | null> => {
        setLoading(true)
        try {
            const data = await typeService.getById(id)
            return data
        } catch (err) {
            handleApiError(err, 'Ma’lumotni yuklab bo‘lmadi!')
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    // 🔹 CREATE
    const handleCreate = async (type: TypeEdit) => {
        setLoading(true)
        try {
            await typeService.create(type)
            toast.success('Tupe muvaffaqiyatli yaratildi!')
            await fetchTypes()
        } catch (err) {
            handleApiError(err, 'Ro‘yxatdan o‘tishda xatolik!')
        } finally {
            setLoading(false)
        }
    }

    // 🔹 EDIT
    const handleUpdate = async (id: string, type: TypeEdit) => {
        if (!type) return
        setLoading(true)
        try {
            await typeService.update(id, type)
            toast.success('Type ma’lumotlari yangilandi!')
        } catch (err) {
            handleApiError(err, 'Yangilashda xatolik!')
        } finally {
            setLoading(false)
        }
    }

    // 🔹 DELETE
    const handleDelete = async (id: string) => {
        setLoading(true)
        try {
            await typeService.delete(id)
            toast.success('Type muvaffaqiyatli o‘chirildi!')
            fetchTypes()
        } catch (err) {
            handleApiError(err, 'O‘chirishda xatolik yuz berdi!')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTypes()
    }, [fetchTypes])

    return {
        loading,
        types,
        setLoading,
        handleCreate,
        handleUpdate,
        handleDelete,
        fetchType,
        fetchTypes,
    }
}
