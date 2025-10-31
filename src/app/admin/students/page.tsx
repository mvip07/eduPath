'use client'

import { useState, useCallback } from 'react'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useStudents } from '@/hooks/useStudents'
import { fadeUp, staggeredList } from '@/components/MotionUtils'
import { EditStudentModal } from './edit/modal'
import { DeleteStudentModal } from './delete/modal'
import { CreateStudentModal } from './create/modal'

export default function Students() {
    const { loading, students, handleDelete, fetchStudents } = useStudents()

    const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleCloseEdit = useCallback(() => {
        setShowEditModal(false)
        setSelectedStudentId(null)
        fetchStudents()
    }, [fetchStudents])

    const handleOpenEdit = useCallback((id: string) => {
        setSelectedStudentId(id)
        setShowEditModal(true)
    }, [])

    const handleCloseDelete = useCallback(() => {
        setShowDeleteModal(false)
        setSelectedStudentId(null)
        fetchStudents()
    }, [fetchStudents])

    const handleOpenDelete = useCallback((id: string) => {
        setSelectedStudentId(id)
        setShowDeleteModal(true)
    }, [])

    const handleOpenCreate = useCallback(() => {
        setShowCreateModal(true)
    }, [])

    const handleCloseCreate = useCallback(() => {
        setShowCreateModal(false)
        fetchStudents()
    }, [fetchStudents])

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-8">
            {loading ? (
                <motion.div variants={fadeUp} className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading student data...</p>
                    </div>
                </motion.div>
            ) : students.length === 0 ? (
                <motion.div variants={fadeUp} className="text-center py-16 bg-white rounded-2xl shadow-lg">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No students found</h3>
                    <p className="text-gray-600">Get started by adding your first student</p>
                </motion.div>
            ) : (
                <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Students</h3>
                        <button onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                            Add Student
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Full Name</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Username</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {students.map((student, index) => (
                                    <motion.tr key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">{student.full_name.charAt(0)}</div>
                                                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{student.full_name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{student.username}</td>
                                        <td className="px-6 py-4 text-gray-600">{student.phone_number}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">{student.role.toLowerCase()}</span>
                                        </td>
                                        <td className="px-6 py-4 flex gap-4 whitespace-nowrap">
                                            <button onClick={() => handleOpenEdit(String(student.id))} className="text-indigo-600 hover:text-indigo-800">
                                                Edit
                                            </button>
                                            <button onClick={() => handleOpenDelete(String(student.id))} className="text-red-600 hover:text-red-800">
                                                Delete
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}
            {showEditModal && <EditStudentModal onClose={handleCloseEdit} id={selectedStudentId as string} />}
            {showDeleteModal && <DeleteStudentModal onClose={handleCloseDelete} onConfirm={() => handleDelete(selectedStudentId as string)} isLoading={loading} />}
            {showCreateModal && <CreateStudentModal onClose={handleCloseCreate} />}
        </motion.div>
    )
}
