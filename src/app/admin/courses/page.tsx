'use client'
import { useEffect, useState } from 'react'
import { useCourses } from '@/hooks/useCourses'
import { CreateCourse, Course } from '@/types'
import { useRouter } from 'next/navigation'
import CourseCard from '@/components/CourseCard'
import CourseForm from '@/components/CourseForm'
import ConfirmModal from '@/components/ConfirmModal'

export default function CoursesPage() {
    const router = useRouter()
    const { courses, loading, fetchCourses, createCourse, deleteCourse, updateCourse, error } = useCourses()
    const [showForm, setShowForm] = useState(false)
    const [editing, setEditing] = useState<Course | null>(null)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [selectedToDelete, setSelectedToDelete] = useState<Course | null>(null)

    useEffect(() => {
        fetchCourses()
    }, [fetchCourses])

    const handleCreate = async (payload: CreateCourse) => {
        await createCourse(payload)
    }

    const handleEdit = async (payload: Partial<Course>) => {
        if (!editing) return
        await updateCourse(editing.id, payload)
        setEditing(null)
    }

    const handleDeleteConfirm = async () => {
        if (!selectedToDelete) return
        await deleteCourse(selectedToDelete.id)
        setSelectedToDelete(null)
        setConfirmOpen(false)
    }

    return (
        <main className="flex-1 p-8 bg-white dark:[var(--bgDark)]/50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--bgDark)] dark:text-[var(--bgLight)]">Courses</h1>
                        <p className="text-sm text-[var(--bgDark)]/60 dark:text-[var(--bgLight)]/60">Manage course catalog.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                setEditing(null)
                                setShowForm(true)
                            }}
                            className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white"
                        >
                            Create Course
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center h-40">Loading...</div>
                ) : error ? (
                    <div className="text-red-500">Error: {error}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {courses.map((c) => (
                            <CourseCard
                                key={c.id}
                                course={c}
                                onEdit={(course) => {
                                    setEditing(course)
                                    setShowForm(true)
                                }}
                                onDelete={(course) => {
                                    setSelectedToDelete(course)
                                    setConfirmOpen(true)
                                }}
                                onOpen={(course) => router.push(`/admin/courses/${course.id}`)}
                            />
                        ))}
                    </div>
                )}

                <CourseForm
                    open={showForm}
                    onClose={() => setShowForm(false)}
                    initial={editing ?? undefined}
                    onSave={async (payload) => {
                        if (editing) {
                            await handleEdit(payload as Course)
                        } else {
                            await handleCreate(payload as CreateCourse)
                        }
                    }}
                />

                <ConfirmModal open={confirmOpen} title="O‘chirishni tasdiqlang" description="Course butunlay o‘chiriladi. Davom etilsinmi?" onCancel={() => setConfirmOpen(false)} onConfirm={handleDeleteConfirm} />
            </div>
        </main>
    )
}
