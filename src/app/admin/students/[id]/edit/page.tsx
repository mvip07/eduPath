'use client'
import { useEditStudent } from '@/hooks/useEditStudent'

export default function EditStudent() {
    const { loading, student, router, handleSubmit, handleChange } = useEditStudent()
    if (loading) return `<p className="p-8 text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>`
    if (!student) return `<p className="p-8 text-gray-600 dark:text-gray-300">Student topilmadi!</p>`

    return (
        <main className="flex-1 p-8 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Edit Student</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input name="full_name" value={student.full_name} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white" />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                    <input name="username" value={student.username} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white" />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                    <input name="phone_number" value={student.phone_number} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white" />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <input type="password" name="password" value={student.password} onChange={handleChange} placeholder="Yangi parol kiriting (ixtiyoriy)" className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white" />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                    <select name="role" value={student.role} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white">
                        <option value="STUDENT">Student</option>
                        <option value="ADMIN">Admin</option>
                        <option value="TEACHER">Teacher</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Active Term</label>
                    <input type="number" name="active_term" value={student.active_term} onChange={handleChange} className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:text-white" />
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="is_active" checked={student.is_active} onChange={handleChange} className="w-5 h-5 accent-[var(--primary)]" />
                    <label className="text-gray-700 dark:text-gray-300">Active holatda</label>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button type="submit" className="w-full bg-[var(--primary)] text-white py-3 px-2 rounded-lg hover:bg-[var(--primary)]/80">
                        Update
                    </button>
                    <button type="button" onClick={() => router.back()} className="bg-gray-300 text-gray-800 py-3 px-2 rounded-lg hover:bg-gray-400">
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    )
}
