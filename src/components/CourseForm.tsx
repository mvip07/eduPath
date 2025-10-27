'use client'
import React, { useState, useEffect } from 'react'
import { CreateCourse, Course, UpdateCourse } from '@/types'

type Props = {
    open: boolean
    onClose: () => void
    onSave: (payload: CreateCourse | UpdateCourse) => Promise<unknown>
    initial?: Partial<Course>
}

export default function CourseForm({ open, onClose, onSave, initial }: Props) {
    const [form, setForm] = useState<CreateCourse | UpdateCourse>({
        title: '',
        description: '',
        level: '',
        image_url: '',
    })

    useEffect(() => {
        if (initial) {
            const mergedForm: CreateCourse | UpdateCourse = { ...form, ...initial }
            setForm(mergedForm)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initial])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await onSave(form)
        onClose()
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[95%] max-w-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{initial ? 'Edit Course' : 'Create Course'}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input name="title" value={form.title || ''} onChange={handleChange} required className="w-full p-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Level</label>
                        <input name="level" value={form.level || ''} onChange={handleChange} required className="w-full p-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Image URL</label>
                        <input name="image_url" value={form.image_url || ''} onChange={handleChange} className="w-full p-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea name="description" value={form.description || ''} onChange={handleChange} rows={4} className="w-full p-2 rounded-lg border" />
                    </div>
                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white">
                            {initial ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
