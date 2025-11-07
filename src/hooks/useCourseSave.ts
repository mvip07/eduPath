import { useState, useEffect } from 'react'
import { Course } from '@/types'
import { courseSaveService } from '@/services/courseSaveService'

export const useCourseSave = (userId: string) => {
    const [savedCourses, setSavedCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!userId) return

        const fetchSaved = async () => {
            setLoading(true)
            try {
                const data: Course[] = await courseSaveService.getSaved(userId)
                setSavedCourses(data)
            } finally {
                setLoading(false)
            }
        }

        fetchSaved()
    }, [userId])

    const isSaved = (courseId: string | number): boolean => savedCourses.some((course) => String(course.id) === String(courseId))

    const toggleSave = async (courseId: string | number) => {
        if (!userId) return
        setLoading(true)

        try {
            if (isSaved(courseId)) {
                await courseSaveService.deleteCourse(userId, String(courseId))
                setSavedCourses((prev) => prev.filter((course) => String(course.id) !== String(courseId)))
            } else {
                const newCourse = await courseSaveService.saveCourse(userId, String(courseId))
                if (newCourse) {
                    setSavedCourses((prev) => [...prev, newCourse])
                } else {
                    // agar backend faqat status qaytarsa, qaytadan fetch
                    const updated = await courseSaveService.getSaved(userId)
                    setSavedCourses(updated)
                }
            }
        } finally {
            setLoading(false)
        }
    }

    return { savedCourses, isSaved, toggleSave, loading }
}
