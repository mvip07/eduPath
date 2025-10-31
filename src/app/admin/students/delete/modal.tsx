import { motion } from 'framer-motion'
import { Loader, Trash2 } from 'lucide-react'

export const DeleteStudentModal = ({ onConfirm, onClose, isLoading }: { onConfirm: () => Promise<void>; onClose: () => void; isLoading: boolean }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6">
                <div className="text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trash2 className="w-10 h-10 text-red-600" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Delete Student</h3>
                    <p className="text-gray-600 mb-2">Are you sure you want to delete this student account?</p>
                    <p className="text-sm text-gray-500 mb-6">This action cannot be undone. All student data will be permanently removed from the system.</p>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-left">
                        <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                            Important Notice
                        </h4>
                        <ul className="text-sm text-red-700 space-y-1">
                            <li>• Student profile will be deleted</li>
                            <li>• Course enrollments will be removed</li>
                            <li>• Progress data will be lost</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} disabled={isLoading} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium disabled:opacity-50">
                        Cancel
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={async () => {
                            await onConfirm()
                            onClose()
                        }}
                        disabled={isLoading}
                        className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader className="w-4 h-4 animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            <>
                                <Trash2 className="w-4 h-4" />
                                Delete Student
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}
