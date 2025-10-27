'use client'
import { useRouter } from 'next/navigation'
import { useStudent } from '@/hooks/useStudent'
import { useDeleteStudent } from '@/hooks/useDeleteStudent'

export default function Students() {
    const router = useRouter()
    const { loading, students } = useStudent()
    const { showModal, setSelectedId, setShowModal, handleDelete } = useDeleteStudent()

    return (
        <main className="flex-1 p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Students</h1>
                <button onClick={() => router.push('/auth/register')} className="px-6 py-2 text-white bg-[var(--primary)] rounded-lg shadow-md hover:bg-[var(--primary)]/80">
                    Add Student
                </button>
            </div>

            <div className="mb-6">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </div>
                    <input className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] dark:text-gray-200" placeholder="Search students by name or username" type="text" />
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>
                </div>
            ) : students.length === 0 ? (
                <div className="text-center text-gray-600 dark:text-gray-400 mt-16">Studentlar topilmadi.</div>
            ) : (
                <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Full Name</th>
                                <th className="px-6 py-3">Username</th>
                                <th className="px-6 py-3">Phone</th>
                                <th className="px-6 py-3">Role</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{student.full_name}</td>
                                    <td className="px-6 py-4">{student.username}</td>
                                    <td className="px-6 py-4">{student.phone_number}</td>
                                    <td className="px-6 py-4 capitalize">{student.role.toLowerCase()}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => router.push(`/admin/students/${student.id}/edit`)} className="font-medium text-[var(--primary)] hover:underline">
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                setSelectedId(student.id)
                                                setShowModal(true)
                                            }}
                                            className="ml-4 font-medium text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md transform scale-100 animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-3">Studentni o‘chirishni xohlaysizmi?</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-center mb-6">Ushbu amalni qaytarib bo‘lmaydi. Tasdiqlasangiz, student ma’lumoti butunlay o‘chiriladi.</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                                Bekor qilish
                            </button>
                            <button onClick={handleDelete} className="px-5 py-2.5 rounded-xl bg-red-500 text-white font-medium shadow-md hover:bg-red-600 active:scale-[0.98] transition-all duration-200">
                                Ha, o‘chir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
