export default function Courses() {
    return (
        <main className="flex-1 p-8 bg-white dark:[var(--bgDark)]/50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[var(--bgDark)] dark:text-[var(--bgLight)]">Course Editor</h1>
                    <p className="text-[var(--bgDark)]/60 dark:text-[var(--bgLight)]/60 mt-1">Manage your course content and structure.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Course Title</label>
                        <input className="form-input w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" type="text" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Course Description</label>
                        <textarea className="form-textarea w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" rows={4}></textarea>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-4">Course Structure</h2>
                    <div className="space-y-2">
                        <div className="flex items-center gap-4 bg-[var(--bgLight)] dark:[var(--bgDark)] p-3 rounded-lg border border-[var(--bgDark)]/10 dark:border-[var(--bgLight)]/10">
                            <div className="flex items-center justify-center rounded-lg bg-[var(--primary)]/20 shrink-0 size-10">
                                <svg className="text-[var(--primary)]" fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <p className="text-[var(--bgDark)] dark:text-[var(--bgLight)] font-medium">Module 1: Introduction</p>
                                <p className="text-sm text-[var(--bgDark)]/60 dark:text-[var(--bgLight)]/60">Introduction to Data Science</p>
                            </div>
                            <button className="text-[var(--bgDark)]/60 dark:text-[var(--bgLight)]/60 hover:text-[var(--primary)]">
                                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center gap-4 bg-[var(--bgLight)] dark:[var(--bgDark)] p-3 rounded-lg border border-[var(--bgDark)]/10 dark:border-[var(--bgLight)]/10">
                            <div className="flex items-center justify-center rounded-lg bg-[var(--primary)]/20 shrink-0 size-10">
                                <svg className="text-[var(--primary)]" fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <p className="text-[var(--bgDark)] dark:text-[var(--bgLight)] font-medium">Module 2: Data Handling</p>
                                <p className="text-sm text-[var(--bgDark)]/60 dark:text-[var(--bgLight)]/60">Data Collection and Preprocessing</p>
                            </div>
                            <button className="text-[var(--bgDark)]/60 dark:text-[var(--bgLight)]/60 hover:text-[var(--primary)]">
                                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                </svg>
                            </button>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary)] hover:bg-[var(--primary)]/20 dark:hover:bg-[var(--primary)]/30">
                            <span>Add Module</span>
                        </button>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-4">Lesson Content</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Lesson Title</label>
                            <input className="form-input w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Lesson Description</label>
                            <textarea className="form-textarea w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" rows={4}></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Video URL</label>
                            <input className="form-input w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" type="url" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Written Materials</label>
                            <textarea className="form-textarea w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" rows={6}></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Homework</label>
                            <textarea className="form-textarea w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" rows={4}></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--bgDark)] dark:text-[var(--bgLight)] mb-1.5">Test</label>
                            <textarea className="form-textarea w-full rounded-lg border-[var(--bgDark)]/20 dark:border-[var(--bgLight)]/20 bg-[var(--bgLight)] dark:[var(--bgDark)] focus:ring-[var(--primary)] focus:border-[var(--primary)] text-[var(--bgDark)] dark:text-[var(--bgLight)] placeholder:text-[var(--bgDark)]/50 dark:placeholder:text-[var(--bgLight)]/50 px-4 py-2" rows={4}></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-[var(--bgDark)]/10 dark:border-[var(--bgLight)]/10 flex justify-end gap-4">
                    <button className="px-4 py-2 rounded-lg text-sm font-semibold [var(--bgDark)]/10 dark:bg-[var(--bgLight)]/10 text-[var(--bgDark)] dark:text-[var(--bgLight)] hover:[var(--bgDark)]/20 dark:hover:bg-[var(--bgLight)]/20">Cancel</button>
                    <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">Save Course</button>
                </div>
            </div>
        </main>
    )
}
