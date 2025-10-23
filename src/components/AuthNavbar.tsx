'use client'
import { Sun, Moon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthNavbar() {
    const router = useRouter()
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const savedTheme = localStorage.getItem('darkMode')
        let isDark = false

        if (savedTheme !== null) {
            isDark = savedTheme === 'true'
        } else {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            localStorage.setItem('darkMode', String(isDark))
        }

        document.documentElement.classList.toggle('dark', isDark)
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')

        queueMicrotask(() => {
            setIsDarkMode(isDark)
        })
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDarkMode
        document.documentElement.classList.toggle('dark', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light')
        localStorage.setItem('darkMode', String(newTheme))
        setIsDarkMode(newTheme)
    }

    return (
        <header className="w-full border-b border-slate-200 dark:border-slate-800">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 text-[var(--primary)]">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white">EduPath</h1>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    {['Home', 'Courses', 'Instructors', 'Pricing'].map((item) => (
                        <a key={item} href="#" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Toggle theme">
                        {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700 dark:text-slate-200" />}
                    </button>

                    <button onClick={() => router.push("/auth/register")} className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--primary)] text-white hover:bg-opacity-90 transition-colors">Sign up</button>
                    <button onClick={() => router.push("/auth/login")} className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)] hover:bg-[var(--primary)]/20 dark:hover:bg-[var(--primary)]/30 transition-colors">Log in</button>
                </div>
            </nav>
        </header>
    )
}
