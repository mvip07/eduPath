import { Clock } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLessons } from '@/hooks/useLessons'
import { useParams, useRouter } from 'next/navigation';

export default function ModuleLessons({ moduleId, activeModule }: { moduleId: string; activeModule: string | null }) {
    const router = useRouter()
    const {id} = useParams<{id: string}>()
    const { lessons } = useLessons(moduleId)
    return (
        <AnimatePresence>
            {activeModule === moduleId && (
                <motion.div key={moduleId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-6 py-6">
                    <div className="space-y-3">
                        {lessons.map((lesson, idx) => (
                            <motion.div key={lesson.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: idx * 0.05 }} className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50">
                                <div className="p-2 rounded-lg bg-gray-200 text-gray-400"><span>🎬</span></div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{lesson.title}</h4>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="flex items-center gap-1 text-gray-400">
                                            <Clock className="w-3 h-3" />
                                            {lesson.duration}
                                        </span>
                                    </div>
                                </div>

                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.push(`${id}/detail/${moduleId}`)} className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                    Start
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}