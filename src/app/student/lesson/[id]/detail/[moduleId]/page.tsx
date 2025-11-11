'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Clock, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import { useLessons } from '@/hooks/useLessons'
import MaterialTemplate from './Material'

export default function LessonVideoPage() {
    const router = useRouter()
    const [currentLesson, setCurrentLesson] = useState(0)
    const { moduleId } = useParams<{ moduleId: string }>()
    const { lessons } = useLessons(moduleId)

    const lesson = lessons[currentLesson]

    const nextLesson = () => {
        if (currentLesson < lessons.length - 1) {
            setCurrentLesson(currentLesson + 1)
        }
    }

    const prevLesson = () => {
        if (currentLesson > 0) {
            setCurrentLesson(currentLesson - 1)
        }
    }

    return (
        <div>
            <header className="bg-white shadow-sm border-b border-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-4'>
                            <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <h1 className="text-2xl font-bold text-gray-900">Learning Platform</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">
                                Lesson {currentLesson + 1} of {lessons.length}
                            </p>
                            <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${((currentLesson + 1) / lessons.length) * 100}%` }} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto py-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow-sm">
                            <div className="relative aspect-video mb-6 overflow-hidden bg-gray-800">
                                <video controls id="lesson-video" src={lesson?.video_url} poster={lesson?.cover_url} controlsList="nodownload" onContextMenu={(e) => e.preventDefault()} className="w-full h-full object-cover rounded-0" />
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">{lesson?.title}</h2>
                                <p className="text-gray-600 mb-4">{lesson?.description}</p>
                            </div>

                            {<MaterialTemplate lessonId={lesson?.id} />}
                        </div>

                        <div className="flex justify-between mt-6">
                            <button onClick={prevLesson} disabled={currentLesson === 0} className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${currentLesson === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50 border'}`}>
                                <ChevronLeft className="w-5 h-5" />
                                Previous Lesson
                            </button>

                            <button onClick={nextLesson} disabled={currentLesson === lessons.length - 1} className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${currentLesson === lessons.length - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                                Next Lesson
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 ">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">All Lessons</h3>
                            <div className="space-y-2">
                                {lessons.map((lessonItem, index) => (
                                    <button key={lessonItem.id} onClick={() => setCurrentLesson(index)} className={`w-full text-left p-3 rounded-lg transition-colors ${index === currentLesson ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Lesson {index + 1}</p>
                                                <p className="text-sm truncate max-w-[200px]">{lessonItem.title}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Clock className="w-4 h-4" />
                                                <span>{lessonItem.duration}</span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
