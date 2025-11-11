import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, FileText } from 'lucide-react'
import { useCourse } from '@/hooks/useCourse'
import { useModal } from '@/components/UI/Modal'
import { fadeUp, staggeredList } from '@/lib/motion'
import { CreateModuleModal, DeleteModuleModal, EditModuleModal } from './modal'
import Lesson from '../Lesson'

export default function CourseModule() {
    const { openModal, closeModal } = useModal()
    const { id } = useParams<{ id: string }>()
    const { loading, modules, fetchModule, createModule, updateModule, deleteModule } = useCourse(id)
    const [expandedModule, setExpandedModule] = useState<string | null>(null)

    const toggleModule = (moduleId: string) => {
        setExpandedModule(expandedModule === moduleId ? null : moduleId)
    }

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'moduleCreate',
            title: 'Create Module',
            btnTitle: 'Create Module',
            content: <CreateModuleModal closeModal={closeModal} handleCreate={createModule} />,
        })
    }

    const handleOpenEdit = (id: string) => {
        openModal({
            type: 'EDIT',
            formId: 'moduleEdit',
            title: 'Edit Module',
            btnTitle: 'Edit Module',
            content: <EditModuleModal id={id} closeModal={closeModal} fetchModule={fetchModule} handleUpdate={updateModule} />,
        })
    }

    const handleOpenDelete = (id: string) => {
        openModal({
            type: 'DELETE',
            formId: 'moduleDelete',
            title: 'Delete Module',
            btnTitle: 'Delete Module',
            content: <DeleteModuleModal id={id} closeModal={closeModal} handleDelete={deleteModule} />,
        })
    }
    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible">
            {loading ? (
                <motion.div variants={fadeUp} className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading course module data...</p>
                    </div>
                </motion.div>
            ) : modules.length === 0 ? (
                <motion.div variants={fadeUp} className="text-center py-16 bg-white rounded-2xl shadow-lg">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No course modules found</h3>
                    <p className="text-gray-600 mb-4">Get started by adding your first course module</p>
                    <button onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                        Create Module
                    </button>
                </motion.div>
            ) : (
                <motion.div variants={fadeUp} className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">All Modules</h2>
                            <p className="text-gray-600 mt-1">Manage your educational content</p>
                        </div>
                        <button onClick={handleOpenCreate} className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                            Add Module
                        </button>
                    </div>

                    {[...modules]
                        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                        .map((module) => (
                            <motion.div key={module.id} layout className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-2 transition-all duration-300 ${expandedModule === module.id ? 'ring-2 ring-blue-400' : 'hover:shadow-xl'}`}>
                                <div className={`p-4 md:p-6 cursor-pointer transition-all duration-300 ${expandedModule === module.id ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'hover:bg-gray-50'}`} onClick={() => toggleModule(module.id)}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col md:flex-row items-start gap-4 flex-1">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">{module.order}</div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                                                <p className="text-gray-600 mt-2">{module.description}</p>
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                                                    <FileText className="w-4 h-4" />
                                                    <span>{0} lessons</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence initial={false}>{expandedModule === module.id && <Lesson key={module.id} moduleId={module.id} handleOpenEdit={handleOpenEdit} handleOpenDelete={handleOpenDelete} />}</AnimatePresence>
                            </motion.div>
                        ))}
                </motion.div>
            )}
        </motion.div>
    )
}
