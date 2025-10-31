'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { BookOpen, Edit, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCourses } from '@/hooks/useCourses'
import { EditCourseModal } from './edit/modal'
import { CreateCourseModal } from './create/modal'
import { DeleteCourseModal } from './delete/modal'
import { fadeUp, staggeredList } from '@/components/MotionUtils'
import { useRouter } from 'next/navigation'

export default function CoursesPage() {
    const router = useRouter()
    const { loading, courses, deleteCourse, fetchCourses } = useCourses()

    const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleCloseEdit = useCallback(() => {
        setShowEditModal(false)
        setSelectedCourseId(null)
        fetchCourses()
    }, [fetchCourses])

    const handleOpenEdit = useCallback((id: string) => {
        setSelectedCourseId(id)
        setShowEditModal(true)
    }, [])

    const handleCloseDelete = useCallback(() => {
        setShowDeleteModal(false)
        setSelectedCourseId(null)
        fetchCourses()
    }, [fetchCourses])

    const handleOpenDelete = useCallback((id: string) => {
        setSelectedCourseId(id)
        setShowDeleteModal(true)
    }, [])

    const handleOpenCreate = useCallback(() => {
        setShowCreateModal(true)
    }, [])

    const handleCloseCreate = useCallback(() => {
        setShowCreateModal(false)
        fetchCourses()
    }, [fetchCourses])

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-8">
            {loading ? (
                <motion.div variants={fadeUp} className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading course data...</p>
                    </div>
                </motion.div>
            ) : courses.length === 0 ? (
                <motion.div variants={fadeUp} className="text-center py-16 bg-white rounded-2xl shadow-lg">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
                    <p className="text-gray-600 mb-4">Get started by adding your first course</p>
                    <button onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                        Create Course
                    </button>
                </motion.div>
            ) : (
                <motion.div variants={fadeUp} className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">All Courses</h2>
                            <p className="text-gray-600 mt-1">Manage your educational content</p>
                        </div>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Add Course
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                                {/* Course Image/Thumbnail */}
                                <div className="relative h-56 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                                    {course.image_url ? (
                                        <Image src={course.image_url} alt={course.title} width={100} height={100} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <BookOpen className="w-12 h-12 text-white opacity-80" />
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{course.level || 'General'}</span>
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description.slice(0, 50) || 'No description available'}</p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenEdit(String(course.id))} className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors" title="Edit Course">
                                                <Edit className="w-4 h-4" />
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenDelete(String(course.id))} className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors" title="Delete Course">
                                                <Trash2 className="w-4 h-4" />
                                            </motion.button>
                                        </div>

                                        <motion.button onClick={() => router.push(`/admin/courses/${course.id}`)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium">
                                            View Details
                                        </motion.button>
                                    </div>
                                </div>

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>

                    {courses.length > 8 && (
                        <div className="flex justify-center mt-8">
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-400 rounded-xl transition-all duration-300 font-medium">
                                Load More Courses
                            </motion.button>
                        </div>
                    )}
                </motion.div>
            )}

            {/* Modals */}
            {showEditModal && <EditCourseModal onClose={handleCloseEdit} id={selectedCourseId as string} />}
            {showDeleteModal && <DeleteCourseModal onClose={handleCloseDelete} onConfirm={() => deleteCourse(selectedCourseId as string)} isLoading={loading} />}
            {showCreateModal && <CreateCourseModal onClose={handleCloseCreate} />}
        </motion.div>
    )
}
