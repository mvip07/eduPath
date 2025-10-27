'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useStudent } from './useStudent'
import { studentService } from '@/services/userService'
import { handleApiError } from '@/utils/handleError'

export const useDeleteStudent = () => {
    const { fetchStudents } = useStudent()
    const [selectedId, setSelectedId] = useState<number | string | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleDelete = async () => {
        if (!selectedId) return
        setLoading(true)
        try {
            await studentService.delete(selectedId)
            toast.success('Student muvaffaqiyatli o‘chirildi!')
            setShowModal(false)
            setSelectedId(null)
            fetchStudents()
        } catch (err) {
            handleApiError(err, 'O‘chirishda xatolik yuz berdi!')
        } finally {
            setLoading(false)
        }
    }

    return { showModal, selectedId, setSelectedId, setShowModal, handleDelete, loading }
}
