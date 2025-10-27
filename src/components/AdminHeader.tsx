'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useMemo } from 'react'
import { LogOut, LayoutDashboard, Users, BookOpen, LifeBuoy, X } from 'lucide-react'

export default function AdminHeader() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const menus = useMemo(
        () => [
            { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
            { name: 'Students', href: '/admin/students', icon: <Users className="w-5 h-5" /> },
            { name: 'Courses', href: '/admin/courses', icon: <BookOpen className="w-5 h-5" /> },
            { name: 'Support', href: '/admin/support', icon: <LifeBuoy className="w-5 h-5" /> },
        ],
        []
    )

    const isActive = (href: string) => {
        if (href === '/admin') {
            return pathname === '/admin'
        }
        return pathname === href || pathname.startsWith(`${href}/`)
    }

    const handleLogout = () => {
        localStorage.removeItem(process.env.NEXT_PUBLIC_EDUPATH_TOKEN || 'EDUPATH_TOKEN')
        router.push('/auth/login')
    }

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-all">
            <aside className={`fixed lg:static top-0 left-0 h-full w-64 z-40 transform bg-white dark:bg-gray-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                        <h1 className="text-2xl font-bold text-[var(--primary)] select-none">EduPlatform</h1>
                        <button onClick={() => setOpen(false)} className="lg:hidden text-gray-600 dark:text-gray-300">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex-grow px-3 py-5">
                        <ul className="space-y-1">
                            {menus.map((menu) => {
                                const active = isActive(menu.href)
                                return (
                                    <li key={menu.href}>
                                        <button
                                            onClick={() => {
                                                router.push(menu.href)
                                                setOpen(false)
                                            }}
                                            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${active ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]'}`}
                                        >
                                            {menu.icon}
                                            <span>{menu.name}</span>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className="px-4 py-6 border-t border-slate-200 dark:border-slate-800">
                        <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors">
                            <LogOut className="w-5 h-5 opacity-70" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-30 lg:hidden" />}
        </div>
    )
}
