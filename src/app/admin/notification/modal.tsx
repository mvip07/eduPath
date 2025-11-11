'use client'
import { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { useStudents } from '@/hooks/useStudents'
import { useNotifications } from '@/hooks/useNotifications'
import { NotificationPayload, NotificationTYPE } from '@/types'

interface Props {
    closeModal: () => void
    handleCreate: (data: { notification_id: string; user_id: string }) => Promise<void>
}

export const CreateNotificationUserModal = ({ closeModal, handleCreate }: Props) => {
    const { students } = useStudents()
    const { notifications } = useNotifications()
    const [selectedUser, setSelectedUser] = useState<string>('')
    const [notificationId, setNotificationId] = useState<string>('')

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate({ user_id: selectedUser, notification_id: notificationId })
                closeModal()
            }}
            id="notificationUserCreate"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select User *</label>
                <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 transition">
                    <option value="">Select user</option>
                    {students.map((u) => (
                        <option key={u.id} value={u.id}>
                            {u.full_name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select User *</label>
                <select value={notificationId} onChange={(e) => setNotificationId(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 transition">
                    <option value="">Select Notification</option>
                    {notifications.map((n) => (
                        <option key={n.id} value={n.id}>
                            {n.title}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

interface NotificationCreate {
    closeModal: () => void
    handleCreate: (data: NotificationPayload, userId?: string) => Promise<void>
}

export const CreateNotificationModal = ({ closeModal, handleCreate }: NotificationCreate) => {
    const { students } = useStudents()
    const [formData, setFormData] = useState<NotificationPayload>({
        title: '',
        message: '',
        type: 'SUCCSESS',
        is_global: true,
    })
    const [selectedUser, setSelectedUser] = useState<string>('')

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData, formData.is_global ? undefined : selectedUser)
                closeModal()
            }}
            id="notificationCreate"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter title" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value as NotificationTYPE })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                        <option value="" disabled>
                            Select a type
                        </option>
                        {['SUCCSESS', 'ERROR', 'WARNING', 'INFO'].map((type, idx) => (
                            <option key={idx} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" checked={formData.is_global} onChange={(e) => setFormData({ ...formData, is_global: e.target.checked })} className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                    <label className="text-sm font-medium text-gray-700">Global notification (send to all users)</label>
                </div>

                {!formData.is_global && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select User *</label>
                        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required={!formData.is_global} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 transition">
                            <option value="">Select user</option>
                            {students.map((u) => (
                                <option key={u.id} value={u.id}>
                                    {u.full_name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* 🔹 Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter message"></textarea>
                </div>
            </div>
        </form>
    )
}

interface NotificationEdit {
    id: string
    closeModal: () => void
    handleUpdate(id: string, data: NotificationPayload): Promise<void>
    fetchNotification: (id: string) => Promise<NotificationPayload | undefined>
}

export const EditNotificationModal = ({ id, closeModal, fetchNotification, handleUpdate }: NotificationEdit) => {
    const [formData, setFormData] = useState<NotificationPayload | null>(null)
    const [isFetchingData, setIsFetchingData] = useState(true)

    useEffect(() => {
        const loadNotificationData = async () => {
            setIsFetchingData(true)
            const res = await fetchNotification(id)
            if (res) {
                setFormData(res)
            }
            setIsFetchingData(false)
        }
        loadNotificationData()
    }, [fetchNotification, id])

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
            id="notificationEdit"
            className="p-4 space-y-4 md:p-6 md:space-y-6"
        >
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter full name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value as NotificationTYPE })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                        <option value="" disabled>
                            Select a type
                        </option>
                        {['SUCCSESS', 'ERROR', 'WARNING', 'INFO'].map((type, idx) => (
                            <option key={idx} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Is Global *</label>
                    <input type="checkbox" checked={formData.is_global} onChange={(e) => setFormData({ ...formData, is_global: e.target.checked })} className="w-5 h-5 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" placeholder="Enter message"></textarea>
                </div>
            </div>
        </form>
    )
}

interface NotificationDelete {
    id: string
    closeModal: () => void
    handleDelete: (id: string) => Promise<void>
}

export const DeleteNotificationModal = ({ id, closeModal, handleDelete }: NotificationDelete) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            className="text-center p-4 space-y-4 md:p-6 md:space-y-6"
            id="notificationDelete"
        >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-10 h-10 text-red-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">Delete Notification</h3>
            <p className="text-gray-600 mb-2">Are you sure you want to delete this notification account?</p>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone. All notification data will be permanently removed from the system.</p>
        </form>
    )
}
