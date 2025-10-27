'use client'

import { useCallback, useEffect, useState } from 'react'
import { studentService } from '@/services/userService'
import { Student } from '@/types/index'
import { handleApiError } from '@/utils/handleError'

export const useStudent = () => {
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)

    const fetchStudents = useCallback(async () => {
        setLoading(true)
        try {
            const data = await studentService.getAll()
            setStudents(data)
        } catch (err) {
            handleApiError(err, 'Studentlarni yuklashda xatolik yuz berdi')
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchStudents()
    }, [fetchStudents])

    return { students, loading, fetchStudents }
}
