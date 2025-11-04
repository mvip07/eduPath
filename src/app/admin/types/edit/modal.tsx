'use client'

import { useEffect, useState, useCallback } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { TypeEdit } from '@/types'
import { useTypes } from '@/hooks/useTypes'

export const EditTypeModal = ({ id, onClose }: { id: string; onClose: () => void }) => {
    const { fetchType, fetchTypes, handleUpdate } = useTypes()
    const [formData, setFormData] = useState<TypeEdit | null>(null)
    const [isFetchingData, setIsFetchingData] = useState(true)

    useEffect(() => {
        const loadStudentData = async () => {
            setIsFetchingData(true)
            const res = await fetchType(id)
            if (res) {
                setFormData(res)
            }
            setIsFetchingData(false)
        }
        loadStudentData()
    }, [fetchType, id])

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            if (!formData || !id) return
            await handleUpdate(id, formData)
            await fetchTypes()
            onClose()
        },
        [onClose, handleUpdate, id, formData, fetchTypes]
    )

    if (isFetchingData || !formData) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
                <div className="text-white">{isFetchingData ? 'Yuklanmoqda...' : "Ma'lumot topilmadi."}</div>
            </div>
        )
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white h-130 overflow-y-auto rounded-2xl w-full max-w-2xl shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Edit Student</h2>
                        <p className="text-gray-600  mt-1">Update student information</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100  rounded-xl transition-colors">
                        <X className="w-6 h-6 text-gray-800" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                        <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                    </div>

                    <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                        <button type="button" onClick={onClose} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors">
                            Cancel
                        </button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                            Edit Type
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}