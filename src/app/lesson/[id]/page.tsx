"use client"
import { useRouter } from "next/navigation"

export default function Lesson() {
    const router = useRouter()
    return (
        <div className="bg-[var(--bgLight)] dark:bg-[var(--bgDark)] font-display text-[var(--contentLight)] dark:text-[var(--contentDark)]">
            <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-10 bg-[var(--bgLight)]/80 dark:bg-[var(--bgDark)]/80 backdrop-blur-sm border-b border-[var(--borderLight)] dark:border-[var(--border-dark)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-4">
                                <svg className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                </svg>
                                <h1 className="text-xl font-bold">EduPlatform</h1>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                                <a className="text-sm font-medium hover:text-[var(--primary)] transition-colors" href="/student">
                                    Home
                                </a>
                                <a className="text-sm font-medium text-[var(--primary)]" href="/course">
                                    Courses
                                </a>
                                <a className="text-sm font-medium hover:text-[var(--primary)] transition-colors" href="#">
                                    Resources
                                </a>
                                <a className="text-sm font-medium hover:text-[var(--primary)] transition-colors" href="#">
                                    Community
                                </a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <button className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQgBW7C8oIKPdMF3wWO2H5C0Gy1rkoSmHm7JEJdQHTS-S_snROAdO1U-yyLl5L3LUUE0Pfwqj9J9LKfN1VExjw23PGVcNZKAoquuQxap-l1Dxp9BRp-cx6RKD-Ck5Rt5nmuO3mJqhxCpkpucqQprkFtnsxjSS9rlmVRg0Q-I-CJ9zvvWZeUOiFlkX2lSgDyhkWLHUS9JZZZ5zNDX4Q_eh9GnLoOEf6JTfbdutc85H_BCRW3F5qBCSq0zu7E_lK-L3_rhpx8N1UlaY")' }}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-2/3">
                            <div className="flex items-center text-sm mb-4 text-[var(--subtleLight)] dark:text-[var(--subtleDark)]">
                                <a className="hover:text-[var(--primary)]" href="/student">
                                    Course
                                </a>
                                <span className="mx-2">/</span>
                                <span className="text-[var(--contentLight)] dark:text-[var(--contentDark)] font-medium">Lesson 1</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Introduction to Data Science</h2>
                            <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                                <div className="relative w-full h-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAWsKYGEMctKxve31JmcajBn8nhrY5gPpF2R6AmH-97P7jGuh8_XNom5SZ3RtDXK4UMJBVYUzVEP86YdWqojnMKKFZnqu2WmBbnuPfRMd09qHBsKbaQErR-Xn1v_5eSx11cKlG8z2M-EJLOdLS6jhRxNDvL3CJbMw-3JgJuidSTYkErPkwsaanp8DIFgJReZXHtNZfBEH8vIHEIzcorV7J447FT5dWU5QmQCV_q2ExybfRlgKaL1d7gheRaTxWKr1lrhaod6ZT6AE")' }}>
                                    <button className="flex items-center justify-center size-16 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-black">
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 border-b border-[var(--borderLight)] dark:border-[var(--border-dark)] pb-2">Lesson Materials</h3>
                                    <p className="text-[var(--subtleLight)] dark:text-[var(--subtleDark)] leading-relaxed">This lesson covers the basics of data science, including key concepts, tools, and techniques. We&apos;ll explore the data science workflow, from data collection and cleaning to analysis and visualization. You&apos;ll learn about different types of data, common data structures, and how to manipulate data using programming languages like Python. We&apos;ll also introduce you to essential libraries such as Pandas and NumPy, which are widely used in the field. By the end of this lesson, you&apos;ll have a solid foundation for understanding and applying data science principles.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 border-b border-[var(--borderLight)] dark:border-[var(--border-dark)] pb-2">Homework</h3>
                                    <p className="text-[var(--subtleLight)] dark:text-[var(--subtleDark)] leading-relaxed mb-4">Complete the following exercises to reinforce your understanding of the lesson material. These exercises will involve working with sample datasets, performing basic data manipulations, and visualizing data using appropriate charts and graphs. Submit your solutions by the end of the week.</p>
                                    <button className="px-5 py-2.5 text-sm font-medium text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/90 focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/50">View Homework</button>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 border-b border-[var(--borderLight)] dark:border-[var(--border-dark)] pb-2">Test</h3>
                                    <p className="text-[var(--subtleLight)] dark:text-[var(--subtleDark)] leading-relaxed mb-4">Take the quiz to assess your knowledge of the concepts covered in this lesson. The quiz consists of multiple-choice questions and short answer questions. You&apos;ll have one hour to complete the quiz, and you can take it only once. Good luck!</p>
                                    <button onClick={() => router.push("/quiz")} className="px-5 py-2.5 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/20 dark:bg-[var(--primary)]/30 hover:bg-[var(--primary)]/30 dark:hover:bg-[var(--primary)]/40 rounded-lg focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/50">Start Test</button>
                                </div>
                            </div>
                        </div>
                        <aside className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
                            <div className="bg-[var(--bgLight)] dark:bg-[var(--bgDark)] rounded-lg border border-[var(--borderLight)] dark:border-[var(--border-dark)] p-6 space-y-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-bold">Course Progress</h4>
                                        <span className="text-sm font-medium text-[var(--primary)]">25%</span>
                                    </div>
                                    <div className="w-full bg-[var(--borderLight)] dark:bg-[var(--border-dark)] rounded-full h-2.5">
                                        <div className="bg-[var(--primary)] h-2.5 rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3">Lesson Outline</h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <a className="flex items-center p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-medium" href="#">
                                                Introduction
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center p-3 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 text-[var(--subtleLight)] dark:text-[var(--subtleDark)] hover:text-[var(--contentLight)] dark:hover:text-[var(--contentDark)] transition-colors" href="#">
                                                Data Collection
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center p-3 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 text-[var(--subtleLight)] dark:text-[var(--subtleDark)] hover:text-[var(--contentLight)] dark:hover:text-[var(--contentDark)] transition-colors" href="#">
                                                Data Cleaning
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center p-3 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 text-[var(--subtleLight)] dark:text-[var(--subtleDark)] hover:text-[var(--contentLight)] dark:hover:text-[var(--contentDark)] transition-colors" href="#">
                                                Data Analysis
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center p-3 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 text-[var(--subtleLight)] dark:text-[var(--subtleDark)] hover:text-[var(--contentLight)] dark:hover:text-[var(--contentDark)] transition-colors" href="#">
                                                Visualization
                                            </a>
                                        </li>
                                        <li>
                                            <a className="flex items-center p-3 rounded-lg hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 text-[var(--subtleLight)] dark:text-[var(--subtleDark)] hover:text-[var(--contentLight)] dark:hover:text-[var(--contentDark)] transition-colors" href="#">
                                                Conclusion
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/90 focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/50">Contact Support</button>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    )
}
