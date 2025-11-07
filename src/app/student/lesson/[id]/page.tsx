'use client'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CourseEdit } from '@/types'
import { useCourse } from '@/hooks/useCourse'
import { useCourses } from '@/hooks/useCourses'
import { Play, Clock, BookOpen, ChevronDown, CheckCircle, Lock, Download, Share2, Bookmark, ArrowLeft, Video, FileText, BarChart3, Award, Loader2 } from 'lucide-react'
import { useCourseContent } from '@/hooks/useCourseContent'
import { useCourseSave } from '@/hooks/useCourseSave'
import { getUserFromStorage } from '@/lib/helpers/userStore'

export default function Lesson() {
    const router = useRouter()
    const { id } = useParams<{ id: string }>()

    const { fetchCourse } = useCourses()
    const { contents } = useCourseContent(id)
    const { modules, fetchModules, loading } = useCourse(id)

    const userId = getUserFromStorage()?.user_id
    const { isSaved, loading: saveLoading, toggleSave } = useCourseSave(userId as string)

    const [course, setCourse] = useState<CourseEdit | null>(null)
    const [activeModule, setActiveModule] = useState<string | number | null>(null)

    useEffect(() => {
        const loadCourse = async () => {
            const res = await fetchCourse(id)
            if (res) {
                setCourse(res)
            }
        }
        loadCourse()
    }, [id, fetchCourse])

    useEffect(() => {
        const loadModules = async () => {
            await fetchModules()
        }
        loadModules()
    }, [id, fetchModules])

    if (loading || !course) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg font-medium">Loading course content...</p>
                </div>
            </div>
        )
    }

    const currentStatus = isSaved(id)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
            <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </motion.button>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 line-clamp-1">{course.title}</h1>
                                <p className="text-gray-600 text-sm">Continue your learning journey</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => toggleSave(id)} className={`p-2 rounded-xl transition-colors flex items-center gap-2 ${currentStatus ? 'text-green-600 hover:bg-green-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} disabled={loading}>
                                {saveLoading ? <Loader2 className="w-5 h-5 animate-spin text-blue-500" /> : currentStatus ? <CheckCircle className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">
                                <Share2 className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="max-w-7xl mx-auto py-6">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="xl:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="relative">
                                <Image src={course.image_url} alt={course.title} width={800} height={400} className="w-full h-64 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            <div className="p-6">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                                <p className="text-gray-600 leading-relaxed text-lg">{course.description}</p>
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    {contents.map((content) => (
                                        <div key={content.id} className="content-card bg-white rounded-xl shadow-md overflow-hidden">
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
                                                </div>
                                                <p className="text-gray-600 mb-4">{content.description}</p>
                                                <iframe className="w-full h-[600px] border rounded-xl" src={content.content_url}></iframe>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">{modules.length}</div>
                                        <div className="text-sm text-gray-600">Modules</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">24</div>
                                        <div className="text-sm text-gray-600">Lessons</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">12</div>
                                        <div className="text-sm text-gray-600">Resources</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="w-6 h-6" />
                                <h3 className="font-semibold text-lg">Your Progress</h3>
                            </div>
                            <div className="text-center mb-4">
                                <div className="text-3xl font-bold">35%</div>
                                <div className="text-blue-100">Course Completed</div>
                            </div>
                            <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                                <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{ width: `35%` }} />
                            </div>
                            <div className="flex justify-between text-sm text-blue-100">
                                <span>12 of 24 lessons</span>
                                <span>35%</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    Course Content
                                </h2>
                                <p className="text-gray-600 text-sm mt-1">{modules.length} modules • 24 lessons • 12h 30m</p>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {modules.map((module, index) => (
                                    <motion.div key={module.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} className="bg-white">
                                        <button onClick={() => setActiveModule(activeModule === module.id ? null : module.id)} className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all duration-300 group">
                                            <div className="flex items-center gap-4 flex-1 text-left">
                                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{module.title}</h3>
                                                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{module.description}</p>
                                                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                                                        <span>5 lessons</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <motion.div animate={{ rotate: activeModule === module.id ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gray-400 group-hover:text-gray-600">
                                                <ChevronDown className="w-5 h-5" />
                                            </motion.div>
                                        </button>

                                        {/* <AnimatePresence>
                                            {activeModule === module.id && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-6 pb-6">
                                                    <div className="space-y-3">
                                                        {mockLessons[module.id as keyof typeof mockLessons]?.map((lesson, lessonIndex) => (
                                                            <motion.div key={lesson.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: lessonIndex * 0.1 }} className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group ${lesson.locked ? 'bg-gray-50 border-gray-200' : lesson.completed ? 'bg-green-50 border-green-200 hover:border-green-300' : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
                                                                <div className={`p-2 rounded-lg ${lesson.locked ? 'bg-gray-200 text-gray-400' : lesson.completed ? 'bg-green-100 text-green-600' : getLessonColor(lesson.type)}`}>{lesson.locked ? <Lock className="w-4 h-4" /> : getLessonIcon(lesson.type)}</div>

                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <h4 className={`font-medium ${lesson.locked ? 'text-gray-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors`}>{lesson.title}</h4>
                                                                        {lesson.completed && !lesson.locked && <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />}
                                                                    </div>
                                                                    <div className="flex items-center gap-4 text-sm">
                                                                        <span className={`flex items-center gap-1 ${lesson.locked ? 'text-gray-400' : 'text-gray-500'}`}>
                                                                            <Clock className="w-3 h-3" />
                                                                            {lesson.duration}
                                                                        </span>
                                                                        <span className={`capitalize ${lesson.locked ? 'text-gray-400' : 'text-gray-500'}`}>{lesson.type}</span>
                                                                    </div>
                                                                </div>

                                                                {!lesson.locked && (
                                                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedLesson(lesson)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${lesson.completed ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
                                                                        {lesson.completed ? 'Review' : 'Start'}
                                                                    </motion.button>
                                                                )}
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence> */}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
