'use client'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CreateStudent, Role } from '@/types'
import { useStudents } from '@/hooks/useStudents'

export const CreateStudentModal = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState<Omit<CreateStudent, 'id'>>({ full_name: '', username: '', phone_number: '', role: 'STUDENT', active_term: 0, password: '' })
    const { handleCreate } = useStudents()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white h-130 overflow-y-auto rounded-2xl w-full max-w-2xl shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Create New Student</h2>
                        <p className="text-gray-600 mt-1">Add a new student to the platform</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form
                    onSubmit={async (e) => {
                        await handleCreate(e, formData)
                        onClose()
                    }}
                    className="p-6 space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter full name" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
                            <input type="text" required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter username" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Active Term *</label>
                            <input type="number" required value={formData.active_term} onChange={(e) => setFormData({ ...formData, active_term: Number(e.target.value) })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter email address" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input type="tel" required value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter phone number" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                            <input type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter phone password" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                            <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value as Role })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                                <option value="STUDENT">Student</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                        <button type="button" onClick={onClose} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors">
                            Cancel
                        </button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                            Create Student
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}
