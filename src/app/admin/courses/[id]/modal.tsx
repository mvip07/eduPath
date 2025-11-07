import { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { FileUploader } from '@/components/UI/UploadImageFirebase'
import { CourseContent, CourseContentEdit, Module, ModuleEdit } from '@/types'

interface ModuleCreateModalProps {
    closeModal: () => void
    handleCreate(data: ModuleEdit): Promise<void>
}

export const CreateModuleModal = ({ closeModal, handleCreate }: ModuleCreateModalProps) => {
    const [formData, setFormData] = useState<ModuleEdit>({ title: '', description: '', order: 0 })

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="moduleCreate"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
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
        </form>
    )
}

interface ModuleEditModalProps {
    id: string
    closeModal: () => void
    fetchModule: (id: string) => Promise<Module | null>
    handleUpdate(id: string, data: ModuleEdit): Promise<void>
}

export const EditModuleModal = ({ id, closeModal, fetchModule, handleUpdate }: ModuleEditModalProps) => {
    const [formData, setFormData] = useState<ModuleEdit | null>(null)
    const [isFetchingData, setIsFetchingData] = useState(true)

    useEffect(() => {
        const loadStudentData = async () => {
            setIsFetchingData(true)
            const res = await fetchModule(id)
            if (res) {
                setFormData(res)
            }
            setIsFetchingData(false)
        }
        loadStudentData()
    }, [fetchModule, id])

    if (isFetchingData || !formData) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
                <div className="text-white">{isFetchingData ? 'Yuklanmoqda...' : "Ma'lumot topilmadi."}</div>
            </div>
        )
    }

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleUpdate(id, formData)
                closeModal()
            }}
            id="moduleEdit"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
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
        </form>
    )
}

interface ModuleDeleteModalProps {
    id: string
    closeModal: () => void
    handleDelete: (id: string) => Promise<void>
}

export const DeleteModuleModal = ({ id, closeModal, handleDelete }: ModuleDeleteModalProps) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            id="moduleDelete"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Module</h3>
            <p className="text-gray-600 mb-4">Are you sure you want to delete ?</p>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone. All lessons and content in this module will be permanently deleted.</p>
        </form>
    )
}

/*

    ========================== Course Content ==========================

*/

interface CreateCourseContentModalProps {
    closeModal: () => void
    handleCreate: (data: CourseContentEdit) => Promise<void>
}

export const CreateCourseContentModal = ({ closeModal, handleCreate }: CreateCourseContentModalProps) => {
    const [formData, setFormData] = useState<CourseContentEdit>({ title: '', description: '', content_url: '' })

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="createContent"
            className="4-6 space-y-4 md:p-6 md:space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border rounded-xl" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border rounded-xl" />
            </div>

            <div>
                <FileUploader folder="contents" type="pdf" fileUrl={formData.content_url as string} onChange={(url) => setFormData({ ...formData, content_url: url })} />
            </div>
        </form>
    )
}

interface EditCourseContentModalProps {
    id: string
    closeModal: () => void
    fetchContent: (id: string) => Promise<CourseContent | undefined>
    handleUpdate: (id: string, data: CourseContentEdit) => Promise<void>
}

export const EditCourseContentModal = ({ id, closeModal, fetchContent, handleUpdate }: EditCourseContentModalProps) => {
    const [formData, setFormData] = useState<CourseContentEdit | null>(null)
    const [isFetchingData, setIsFetchingData] = useState(true)

    useEffect(() => {
        const loadContentData = async () => {
            setIsFetchingData(true)
            const res = await fetchContent(id)
            if (res) {
                setFormData(res)
            }
            setIsFetchingData(false)
        }
        loadContentData()
    }, [fetchContent, id])

    if (isFetchingData || !formData) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
                <div className="text-white">{isFetchingData ? 'Yuklanmoqda...' : "Ma'lumot topilmadi."}</div>
            </div>
        )
    }

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                handleUpdate(id, formData)
                closeModal()
            }}
            id="contentEdit"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border rounded-xl" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border rounded-xl" />
            </div>
            <div>
                <FileUploader folder="contents" type="pdf" fileUrl={formData.content_url as string} onChange={(url) => setFormData({ ...formData, content_url: url })} />
            </div>
        </form>
    )
}

interface DeleteCourseContentModalProps {
    id: string
    closeModal: () => void
    handleDelete: (id: string) => Promise<void>
}

export const DeleteCourseContentModal = ({ id, closeModal, handleDelete }: DeleteCourseContentModalProps) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            id="contentDelete"
            className=" text-center p-4 space-y-4 md:p-6 md:space-y-6"
        >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-10 h-10 text-red-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">Delete Content</h3>
            <p className="text-gray-600 mb-2">Are you sure you want to delete this content?</p>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone. All Type data will be permanently removed from the system.</p>
        </form>
    )
}

// https://firebasestorage.googleapis.com/v0/b/kamronlessonbot.appspot.com/o/my-zone-online%2Fcontents%2F1762431359767-oxcr5ifdrei.pdf?alt=media&token=bd1922ac-3242-45f0-b25b-8118aeb297e4
