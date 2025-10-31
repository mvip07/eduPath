'use client'
import { useRouter } from 'next/navigation'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter()

    return (
        <div className="bg-[var(--bgLight)] font-display text-slate-800">
            <div className="flex flex-col min-h-screen">
                <header className="w-full border-b border-slate-200">
                    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 text-[var(--primary)]">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-slate-900">EduPath</h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={() => router.push('/auth/login')} className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)] hover:bg-[var(--primary)]/20 dark:hover:bg-[var(--primary)]/30 transition-colors">
                                Log in
                            </button>
                        </div>
                    </nav>
                </header>
                {children}
            </div>
        </div>
    )
}
