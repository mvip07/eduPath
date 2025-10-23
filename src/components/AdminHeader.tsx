export default function AdminHeader() {
    return (
        <aside className="w-64 bg-white dark:[var(--bgDark)] border-r border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-[var(--primary)]">EduPlatform</h1>
            </div>
            <nav className="flex-grow px-4">
                <ul>
                    <li>
                        <a className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)] font-semibold" href="/admin">
                            <svg className="w-6 h-6" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 13h6v-2H4v2zm0 4h6v-2H4v2zm0-8h6V7H4v2zm10 2l-4-4v3H4v2h6v3l4-4zm6-6v12h-8v-2h6V7h-6V5h8z"></path>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 hover:text-[var(--primary)] transition-colors" href="/admin/students">
                            <svg className="w-6 h-6 opacity-70" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                            <span>Students</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 hover:text-[var(--primary)] transition-colors" href="/admin/courses">
                            <svg className="w-6 h-6 opacity-70" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
                            </svg>
                            <span>Courses</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 hover:text-[var(--primary)] transition-colors" href="/admin/support">
                            <svg className="w-6 h-6 opacity-70" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 8V7l-3 3-3-3v1h-4v6h4v1l3-3 3 3v-1h4V8h-4zm-2 10H5V5h14v2h-2v1h-2v2h-2v2h2v2h2v1h2v2z"></path>
                            </svg>
                            <span>Support</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="px-4 py-6">
                <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 hover:text-[var(--primary)] transition-colors" href="#">
                    <svg className="w-6 h-6 opacity-70" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    </svg>
                    <span>Logout</span>
                </a>
            </div>
        </aside>
    )
}
