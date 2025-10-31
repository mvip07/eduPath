import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCourse } from '@/hooks/useCourse'
import { Modal } from '../page'
import { UpdateModule } from '@/types'

export const EditModuleModal = ({ onClose, moduleId }: { onClose: () => void; moduleId: string }) => {
    const { fetchModules, fetchModule, updateModule } = useCourse()
    const [formData, setFormData] = useState<UpdateModule | null>(null)
    const [isFetchingData, setIsFetchingData] = useState(true)

    useEffect(() => {
        const loadStudentData = async () => {
            setIsFetchingData(true)
            const res = await fetchModule(moduleId)
            if (res) {
                setFormData(res as UpdateModule)
            }
            setIsFetchingData(false)
        }
        loadStudentData()
    }, [fetchModule, moduleId])

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            if (!formData || !moduleId) return
            await updateModule(moduleId, formData)
            await fetchModules()
            onClose()
        },
        [onClose, updateModule, moduleId, formData, fetchModules]
    )

    if (isFetchingData || !formData) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
                <div className="text-white">{isFetchingData ? 'Yuklanmoqda...' : "Ma'lumot topilmadi."}</div>
            </div>
        )
    }

    return (
        <Modal onClose={onClose} title="Edit Module">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                        <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Order *</label>
                        <input type="number" required value={formData.order} onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                        <textarea rows={10} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
                    <button type="button" onClick={onClose} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors">
                        Cancel
                    </button>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                        Edit Module
                    </motion.button>
                </div>
            </form>
        </Modal>
    )
}