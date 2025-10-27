import AdminHeader from '@/components/AdminHeader'

export default function Rootlayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-[var(--bgLight)] dark:[var(--bgDark)] font-display text-slate-800 dark:text-slate-200">
            <div className="flex min-h-screen">
                <AdminHeader />
                {children}
            </div>
        </div>
    )
}
