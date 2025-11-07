'use client'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useStudents } from '@/hooks/useStudents'
import { useModal } from '@/components/UI/Modal'
import { fadeUp, staggeredList } from '@/lib/motion'
import { CreateStudentModal, DeleteStudentModal, EditStudentModal } from './modal'
import { useTypes } from '@/hooks/useTypes'

export default function Students() {
    const { types } = useTypes()
    const { openModal, closeModal } = useModal()
    const { loading, students, fetchStudent, handleCreate, handleUpdate, handleDelete } = useStudents()

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'studentCreate',
            title: 'Create Student',
            btnTitle: 'Create Student',
            content: <CreateStudentModal closeModal={closeModal} handleCreate={handleCreate} />,
        })
    }

    const handleOpenEdit = (id: string) => {
        openModal({
            type: 'EDIT',
            formId: 'studentEdit',
            title: 'Edit Student',
            btnTitle: 'Edit Student',
            content: <EditStudentModal id={id} closeModal={closeModal} fetchStudent={fetchStudent} handleUpdate={handleUpdate} />,
        })
    }

    const handleOpenDelete = (id: string) => {
        openModal({
            type: 'DELETE',
            formId: 'studentDelete',
            title: 'Delete Student',
            btnTitle: 'Delete Student',
            content: <DeleteStudentModal id={id} closeModal={closeModal} handleDelete={handleDelete} />,
        })
    }

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
                    <p className="text-gray-600 mb-4">Get started by adding your first student</p>
                    <button onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                        Create Student
                    </button>
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
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {students.map((student, index) => {
                                    const type = types.find((t) => t.id === student.type_id)
                                    return (
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
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">{student.role.toUpperCase()}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">{type?.title || '—'}</div>
                                            </td>
                                            <td className="px-6 py-4 flex gap-4 whitespace-nowrap">
                                                <button onClick={() => handleOpenEdit(student.id)} className="text-indigo-600 hover:text-indigo-800">
                                                    Edit
                                                </button>
                                                <button onClick={() => handleOpenDelete(student.id)} className="text-red-600 hover:text-red-800">
                                                    Delete
                                                </button>
                                            </td>
                                        </motion.tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}
