'use client'
import { useParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Play, Edit, Trash2, Plus, FileText, X } from 'lucide-react'
import { useCourse } from '@/hooks/useCourse'
import { fadeUp } from '@/components/MotionUtils'
import { EditModuleModal } from './edit/modal'
import { CreateModuleModal } from './create/modal'
import { DeleteModuleModal } from './delete/modal'

export default function CourseModules() {
    const { id } = useParams()
    const { modules, loading, deleteModule, fetchModules } = useCourse(String(id))
    const [expandedModule, setExpandedModule] = useState<number | null>(1)
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null)

    const toggleModule = (moduleId: number) => {
        setExpandedModule(expandedModule === moduleId ? null : moduleId)
    }

    const handleCloseEdit = useCallback(() => {
        setShowEditModal(false)
        setSelectedModuleId(null)
        fetchModules()
    }, [fetchModules])

    const handleOpenEdit = useCallback((id: string) => {
        setSelectedModuleId(id)
        setShowEditModal(true)
    }, [])

    const handleCloseDelete = useCallback(() => {
        setShowDeleteModal(false)
        setSelectedModuleId(null)
        fetchModules()
    }, [fetchModules])

    const handleOpenDelete = useCallback((id: string) => {
        setSelectedModuleId(id)
        setShowDeleteModal(true)
    }, [])

    const handleOpenCreate = useCallback(() => {
        setShowCreateModal(true)
    }, [])

    const handleCloseCreate = useCallback(() => {
        setShowCreateModal(false)
        fetchModules()
    }, [fetchModules])

    return (
        <>
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="sm:flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Course Modules</h1>
                        <p className="text-gray-600">Manage and organize your course content</p>
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleOpenCreate} className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center ms-auto gap-2 mt-4 sm:mt-0">
                        <Plus className="w-5 h-5" />
                        Add Module
                    </motion.button>
                </motion.div>
                <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {[...modules]
                        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                        .map((module) => (
                            <motion.div key={module.id} variants={fadeUp} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
                                <div className={`p-4 md:p-6 cursor-pointer transition-all duration-300 ${expandedModule === module.id ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'hover:bg-gray-50'}`} onClick={() => toggleModule(Number(module.id))}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col md:flex-row items-start gap-4 flex-1">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">{module.order}</div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                                                </div>

                                                <p className="text-gray-600 mb-3">{module.description}</p>

                                                <div className="flex items-center gap-6 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <FileText className="w-4 h-4" />
                                                        {/* <span>{module.lessons} lessons</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedModule === module.id && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="border-t border-gray-100">
                                            <div className="p-4 md:p-6">
                                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                                                    <h4 className="font-semibold text-gray-900  flex items-center gap-2">
                                                        <Play className="w-5 h-5 text-blue-600" />
                                                        Lessons in this module
                                                    </h4>
                                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="self-end px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                                                        <Plus className="w-4 h-4" />
                                                        Add Lesson
                                                    </motion.button>
                                                </div>

                                                <div className="space-y-3">
                                                    {/* {lessonsData[module.id as keyof typeof lessonsData]?.map((lesson, lessonIndex) => (
                                                    <motion.div key={lesson.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: lessonIndex * 0.1 }} className="flex flex-col sm:flex-row md:items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group">
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h5 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{lesson.title}</h5>
                                                            </div>
                                                        </div>

                                                        <div className="self-end flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                                                                <Eye className="w-4 h-4" />
                                                            </button>
                                                            <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors">
                                                                <Edit className="w-4 h-4" />
                                                            </button>
                                                            <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ))} */}
                                                </div>

                                                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
                                                    <div className="flex items-center gap-2">
                                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenEdit(String(module.id))} className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2">
                                                            <Edit className="w-4 h-4" />
                                                            Edit Module
                                                        </motion.button>
                                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenDelete(String(module.id))} className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                                            <Trash2 className="w-4 h-4" />
                                                            Delete Module
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                </motion.div>

                {modules.length === 0 && (
                    <motion.div variants={fadeUp} className="text-center py-16 bg-white rounded-2xl shadow-lg">
                        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No modules found</h3>
                        <p className="text-gray-600 mb-6">Get started by creating your first module</p>
                        <button onClick={handleOpenCreate} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                            Create Module
                        </button>
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {showEditModal && <EditModuleModal onClose={handleCloseEdit} moduleId={selectedModuleId as string} />}
                {showDeleteModal && <DeleteModuleModal onClose={handleCloseDelete} onConfirm={() => deleteModule(selectedModuleId as string)} isLoading={loading} />}
                {showCreateModal && <CreateModuleModal onClose={handleCloseCreate} courseId={String(id)} />}
            </AnimatePresence>
        </>
    )
}

export const Modal = ({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white h-auto max-h-130 overflow-y-auto rounded-2xl w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </motion.div>
        </motion.div>
    )
}
