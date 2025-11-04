'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { TypeEdit } from '@/types'
import { useTypes } from '@/hooks/useTypes'

export const CreateTypeModal = ({ onClose }: { onClose: () => void }) => {
    const [formData, setFormData] = useState<Omit<TypeEdit, 'id'>>({ title: '', description: '' })
    const { handleCreate } = useTypes()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white h-130 overflow-y-auto rounded-2xl w-full max-w-2xl shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Create New Type</h2>
                        <p className="text-gray-600 mt-1">Add a new type to the platform</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form
                    onSubmit={async (e) => {
                        e.preventDefault()
                        await handleCreate(formData)
                        onClose()
                    }}
                    className="p-6 space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                        <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter type title" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter type description" />
                    </div>

                    <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                        <button type="button" onClick={onClose} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors">
                            Cancel
                        </button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                            Create Type
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}
