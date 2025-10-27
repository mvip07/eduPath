import StudentHeader from '@/components/StudentHeader'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-[var(--bgLight)] dark:[var(--bgDark)] font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col">
                <div className="flex h-full grow flex-row">
                    <StudentHeader />
                    {children}
                </div>
            </div>
        </div>
    )
}
