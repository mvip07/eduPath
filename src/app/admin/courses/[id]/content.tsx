import { motion } from 'framer-motion'
import { BookOpen, Edit, Trash2 } from 'lucide-react'
import { fadeUp, staggeredList } from '@/lib/motion'
import { CreateCourseContentModal, DeleteCourseContentModal, EditCourseContentModal } from './modal'

import { useCourseContent } from '@/hooks/useCourseContent'
import { useModal } from '@/components/UI/Modal'

export default function CourseContent(id: string) {
    const { openModal, closeModal } = useModal()
    const { loading, contents, fetchContent, createContent, updateContent, deleteContent } = useCourseContent(id)

    const handleOpenCreateContent = () => {
        openModal({
            type: 'CREATE',
            formId: 'createContent',
            title: 'Create Content',
            btnTitle: 'Create Content',
            content: <CreateCourseContentModal closeModal={closeModal} handleCreate={createContent} />,
        })
    }

    const handleOpenEditContent = (id: string) => {
        openModal({
            type: 'EDIT',
            formId: 'contentEdit',
            title: 'Edit Content',
            btnTitle: 'Edit Content',
            content: <EditCourseContentModal id={id} closeModal={closeModal} fetchContent={fetchContent} handleUpdate={updateContent} />,
        })
    }

    const handleOpenDeleteContent = (id: string) => {
        openModal({
            type: 'DELETE',
            formId: 'contentDelete',
            title: 'Delete Content',
            btnTitle: 'Delete Content',
            content: <DeleteCourseContentModal id={id} closeModal={closeModal} handleDelete={deleteContent} />,
        })
    }

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-8">
            {loading ? (
                <motion.div variants={fadeUp} className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading course module data...</p>
                    </div>
                </motion.div>
            ) : contents.length === 0 ? (
                <motion.div variants={fadeUp} className="text-center py-16 bg-white rounded-2xl shadow-lg">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses content found</h3>
                    <p className="text-gray-600 mb-4">Get started by adding your first course content</p>
                    <button onClick={handleOpenCreateContent} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                        Create Content
                    </button>
                </motion.div>
            ) : (
                <motion.div variants={fadeUp} className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">All Content</h2>
                            <p className="text-gray-600 mt-1">Manage your educational content</p>
                        </div>
                        <button onClick={handleOpenCreateContent} className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                            Add Content
                        </button>
                    </div>

                    {contents.map((content) => (
                        <div key={content.id} className="content-card bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
                                    <div className="flex items-center justify-between border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenEditContent(content.id)} className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2">
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </motion.button>
                                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleOpenDeleteContent(content.id)} className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                                <Trash2 className="w-4 h-4" />
                                                Delete
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{content.description}</p>
                                <iframe className="w-full h-[600px] border rounded-xl" src={content.content_url}></iframe>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    )
}
