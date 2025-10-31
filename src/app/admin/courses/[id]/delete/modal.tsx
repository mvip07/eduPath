import { Loader, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Modal } from '../page'

export const DeleteModuleModal = ({ onConfirm, onClose, isLoading }: { onConfirm: () => Promise<void>; onClose: () => void; isLoading: boolean }) => {
    return (
        <Modal onClose={onClose} title="Delete Module">
            <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Module</h3>
                <p className="text-gray-600 mb-4">Are you sure you want to delete ?</p>
                <p className="text-sm text-gray-500 mb-6">This action cannot be undone. All lessons and content in this module will be permanently deleted.</p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-200">
                <button onClick={onClose} className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors">
                    Cancel
                </button>
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
                            Delete Module
                        </>
                    )}
                </motion.button>
            </div>
        </Modal>
    )
}
