export default function Dashboard() {
    return (
        <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-900/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-base font-medium text-slate-500 dark:text-slate-400 mb-2">Total Students</h2>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">1,250</p>
                </div>
                <div className="bg-white dark:bg-slate-900/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-base font-medium text-slate-500 dark:text-slate-400 mb-2">Active Courses</h2>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">35</p>
                </div>
                <div className="bg-white dark:bg-slate-900/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-base font-medium text-slate-500 dark:text-slate-400 mb-2">Support Tickets</h2>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">12</p>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h2>
            <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800">
                            <th className="p-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Student Name</th>
                            <th className="p-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Course</th>
                            <th className="p-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Progress</th>
                            <th className="p-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                            <td className="p-4 text-slate-800 dark:text-slate-200">Ethan Carter</td>
                            <td className="p-4 text-slate-500 dark:text-slate-400">Introduction to Programming</td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div className="bg-[var(--primary)] h-2 rounded-full progress-bar-inner" style={{ width: '75%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">75%</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)]">Active</span>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                            <td className="p-4 text-slate-800 dark:text-slate-200">Olivia Bennett</td>
                            <td className="p-4 text-slate-500 dark:text-slate-400">Digital Marketing Fundamentals</td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div className="bg-[var(--primary)] h-2 rounded-full progress-bar-inner" style={{ width: '50%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">50%</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)]">Active</span>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                            <td className="p-4 text-slate-800 dark:text-slate-200">Noah Thompson</td>
                            <td className="p-4 text-slate-500 dark:text-slate-400">Data Science Essentials</td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div className="bg-[var(--primary)] h-2 rounded-full progress-bar-inner" style={{ width: '25%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">25%</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)]">Active</span>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                            <td className="p-4 text-slate-800 dark:text-slate-200">Ava Harper</td>
                            <td className="p-4 text-slate-500 dark:text-slate-400">Graphic Design Basics</td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div className="bg-[var(--primary)] h-2 rounded-full progress-bar-inner" style={{ width: '90%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">90%</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-500">Completed</span>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                            <td className="p-4 text-slate-800 dark:text-slate-200">Liam Foster</td>
                            <td className="p-4 text-slate-500 dark:text-slate-400">Web Development Bootcamp</td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div className="bg-[var(--primary)] h-2 rounded-full progress-bar-inner" style={{ width: '10%' }}></div>
                                    </div>
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">10%</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)]">Active</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
