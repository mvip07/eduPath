'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Edit, Trash2, BookOpen } from 'lucide-react'
import { EditTypeModal } from './edit/modal'
import { CreateTypeModal } from './create/modal'
import { DeleteTypeModal } from './delete/modal'
import { useTypes } from '@/hooks/useTypes'
import { fadeUp, staggeredList } from '@/components/MotionUtils'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
}

export default function TypesListPage() {
    const { loading, types, handleDelete, fetchTypes } = useTypes()

    const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleCloseEdit = useCallback(() => {
        setShowEditModal(false)
        setSelectedTypeId(null)
        fetchTypes()
    }, [fetchTypes])

    const handleOpenEdit = useCallback((id: string) => {
        setSelectedTypeId(id)
        setShowEditModal(true)
    }, [])

    const handleCloseDelete = useCallback(() => {
        setShowDeleteModal(false)
        setSelectedTypeId(null)
        fetchTypes()
    }, [fetchTypes])

    const handleOpenDelete = useCallback((id: string) => {
        setSelectedTypeId(id)
        setShowDeleteModal(true)
    }, [])

    const handleOpenCreate = useCallback(() => {
        setShowCreateModal(true)
    }, [])

    const handleCloseCreate = useCallback(() => {
        setShowCreateModal(false)
        fetchTypes()
    }, [fetchTypes])

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-8">
            {loading ? (
                <motion.div variants={fadeUp} className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading types data...</p>
                    </div>
                </motion.div>
            ) : types.length === 0 ? (
                <motion.div variants={fadeUp} className="text-center py-16 bg-white rounded-2xl shadow-lg">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No types found</h3>
                    <p className="text-gray-600 mb-4">Get started by adding your first types</p>
                    <button onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                        Create Type
                    </button>
                </motion.div>
            ) : (
                <motion.div variants={fadeUp} className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">All Types</h2>
                            <p className="text-gray-600 mt-1">Manage your educational content</p>
                        </div>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Add Type
                        </motion.button>
                    </div>
                    
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {types.map((type) => (
                                <motion.div key={type.id} variants={itemVariants} layout whileHover={{ y: -5, scale: 1.02 }} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative">
                                    <div className="h-96 overflow-auto p-6 scroll-none">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{type.title}</h3>
                                                </div>

                                                <p className="text-gray-600 text-sm">{type.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-50 ">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenEdit(type.id.toString())} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit Type">
                                                    <Edit className="w-4 h-4" />
                                                </motion.button>
                                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenDelete(type.id.toString())} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Type">
                                                    <Trash2 className="w-4 h-4" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    {types.length > 8 && (
                        <div className="flex justify-center mt-8">
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-400 rounded-xl transition-all duration-300 font-medium">
                                Load More Types
                            </motion.button>
                        </div>
                    )}
                </motion.div>
            )}

            {showEditModal && <EditTypeModal onClose={handleCloseEdit} id={selectedTypeId as string} />}
            {showDeleteModal && <DeleteTypeModal onClose={handleCloseDelete} onConfirm={() => handleDelete(selectedTypeId as string)} isLoading={loading} />}
            {showCreateModal && <CreateTypeModal onClose={handleCloseCreate} />}
        </motion.div>
    )
}