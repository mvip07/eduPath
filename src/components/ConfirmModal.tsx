'use client'

type Props = {
    open: boolean
    title?: string
    description?: string
    onCancel: () => void
    onConfirm: () => void
    confirmText?: string
    cancelText?: string
}

export default function ConfirmModal({ open, title = 'Tasdiqlash', description, onCancel, onConfirm, confirmText = 'Ha', cancelText = 'Yo‘q' }: Props) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-[90%] max-w-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                {description && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>}
                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={onCancel} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700">
                        {cancelText}
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-red-500 text-white">
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}
