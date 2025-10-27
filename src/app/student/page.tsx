'use client'
import { useCourses } from '@/hooks/useCourses'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function StudentDashboard() {
    const router = useRouter()
    const { courses, fetchCourses, loading } = useCourses()

    useEffect(() => {
        fetchCourses()
    }, [fetchCourses])

    return (
        <main className="flex-1 p-8 overflow-y-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-black dark:text-white">My Learning</h1>
            </header>
            <div className="space-y-12">
                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
                        <p className="ml-3 text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>
                    </div>
                ) : courses && courses.length === 0 ? (
                    <div className="text-center text-gray-600 dark:text-gray-400 mt-16">Kurslar topilmadi.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((i) => (
                            <div key={i.id} onClick={() => router.push('/lesson/1')} className="bg-[var(--bgLight)] dark:bg-[var(--bgDark)] shadow-md rounded-lg overflow-hidden group cursor-pointer">
                                <div className="relative">
                                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" style={{ backgroundImage: `url(${i.image_url})` }}></div>
                                    <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/50 rounded">
                                        <div className="w-full bg-[var(--primary)]/30 rounded-full h-1.5">
                                            <div className="bg-[var(--primary)] h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-black dark:text-white">{i.title}</h3>
                                    <p className="text-sm text-black/60 dark:text-white/60">{i.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
