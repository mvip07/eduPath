import { useState } from 'react'
import { Modal } from '../page'
import { motion } from 'framer-motion'
import { CreateModule } from '@/types'
import { useCourse } from '@/hooks/useCourse'

export const CreateModuleModal = ({ onClose, courseId }: { onClose: () => void; courseId: string }) => {
    const [formData, setFormData] = useState<CreateModule>({
        order: 0,
        title: '',
        description: '',
    })

    const { createModule } = useCourse(courseId)
    return (
        <Modal onClose={onClose} title="Create New Module">
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                        <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter module title" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter module description" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                        <input type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                    <button type="button" onClick={onClose} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors">
                        Cancel
                    </button>
                    <motion.button
                        onClick={async (e) => {
                            e.preventDefault()
                            await createModule(e, formData)
                            onClose()
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                    >
                        Create Module
                    </motion.button>
                </div>
            </div>
        </Modal>
    )
}
