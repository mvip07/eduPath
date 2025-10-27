'use client'
import React, { useState } from 'react'
import { Module, ModulePayload } from '@/types'
import { useCourse } from '@/hooks/useCourse'
import { useParams } from 'next/navigation'
import ConfirmModal from '@/components/ConfirmModal'

export default function CourseDetailPage() {
    const params = useParams()
    const courseId = Array.isArray(params?.id) ? params.id[0] : params?.id

    const { course, modules, loading, createModule, updateModule, deleteModule } = useCourse(courseId)
    const [modOpen, setModOpen] = useState(false)
    const [editingModule, setEditingModule] = useState<Module | null>(null)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [toDeleteModule, setToDeleteModule] = useState<Module | null>(null)

    if (loading) return <div className="p-8">Loading...</div>

    return (
        <main className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">{course?.title}</h1>
                        <p className="text-sm text-gray-500">{course?.description}</p>
                    </div>
                </div>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Modules</h2>
                    <div className="space-y-3">
                        {modules.map((m) => (
                            <div key={m.id} className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg border">
                                <div>
                                    <div className="font-medium">{m.title}</div>
                                    <div className="text-sm text-gray-500">{m.description}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="text-[var(--primary)]"
                                        onClick={() => {
                                            setEditingModule(m)
                                            setModOpen(true)
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500"
                                        onClick={() => {
                                            setToDeleteModule(m)
                                            setConfirmOpen(true)
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div>
                            <button
                                className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white"
                                onClick={() => {
                                    setEditingModule(null)
                                    setModOpen(true)
                                }}
                            >
                                Add Module
                            </button>
                        </div>
                    </div>
                </section>

                {modOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-[90%] max-w-md">
                            <h3 className="text-lg font-semibold mb-3">{editingModule ? 'Edit Module' : 'Add Module'}</h3>
                            <ModuleForm
                                initial={editingModule}
                                onCancel={() => setModOpen(false)}
                                onSave={async (payload: ModulePayload) => {
                                    if (editingModule) {
                                        await updateModule(editingModule.id, payload)
                                    } else {
                                        await createModule(payload)
                                    }
                                    setModOpen(false)
                                }}
                            />
                        </div>
                    </div>
                )}

                <ConfirmModal
                    open={confirmOpen}
                    title="Module o‘chirilsinmi?"
                    description="Module o‘chirilgach, unga tegishli darslar ham yo‘q bo‘lishi mumkin."
                    onCancel={() => setConfirmOpen(false)}
                    onConfirm={async () => {
                        if (toDeleteModule) {
                            await deleteModule(toDeleteModule.id)
                            setConfirmOpen(false)
                        }
                    }}
                />
            </div>
        </main>
    )
}

interface ModuleFormProps {
    initial: Module | null
    onCancel: () => void
    onSave: (payload: ModulePayload) => void
}

function ModuleForm({ initial, onCancel, onSave }: ModuleFormProps) {
    const [title, setTitle] = useState(initial?.title ?? '')
    const [description, setDescription] = useState(initial?.description ?? '')

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSave({ title, description })
            }}
        >
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 rounded-lg border" />
            </div>
            <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full p-2 rounded-lg border" />
            </div>
            <div className="mt-4 flex justify-end gap-2">
                <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg bg-gray-100">
                    Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white">
                    Save
                </button>
            </div>
        </form>
    )
}
