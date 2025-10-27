'use client'
import Image from 'next/image'
import { Course } from '@/types'
import { Edit3, Trash2, ExternalLink } from 'lucide-react'

type Props = {
    course: Course
    onEdit: (c: Course) => void
    onDelete: (c: Course) => void
    onOpen: (c: Course) => void
}

export default function CourseCard({ course, onEdit, onDelete, onOpen }: Props) {
    return (
        <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col">
            <div className="relative w-full h-56 sm:h-60 md:h-64 overflow-hidden">
                <Image src={course.image_url} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col flex-1 p-5">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1 mb-1">{course.title}</h4>
                <p className="text-xs text-[var(--primary)] font-semibold uppercase tracking-wide mb-2">{course.level}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 flex-1">{course.description}</p>

                <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <button onClick={() => onOpen(course)} className="flex items-center gap-1 px-3 py-2 rounded-md text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors text-sm font-medium">
                        <ExternalLink className="w-4 h-4" /> Open
                    </button>
                    <button onClick={() => onEdit(course)} className="flex items-center gap-1 px-3 py-2 rounded-md text-blue-600 hover:bg-blue-600/10 transition-colors text-sm font-medium">
                        <Edit3 className="w-4 h-4" /> Edit
                    </button>
                    <button onClick={() => onDelete(course)} className="flex items-center gap-1 px-3 py-2 rounded-md text-red-500 hover:bg-red-500/10 transition-colors text-sm font-medium">
                        <Trash2 className="w-4 h-4" /> Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
