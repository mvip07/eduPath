"use client"
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Quiz() {
    const router = useRouter()
    return (
        <div className="font-display bg-[var(--bgLight)] dark:bg-[var(--bgDark)] text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">
            <div className="flex flex-col min-h-screen">
                <header className="sticky top-0 z-10 bg-[var(--bgLight)]/80 dark:bg-[var(--bgDark)]/80 backdrop-blur-sm border-b border-[var(--subtleLight)] dark:border-[var(--subtleDark)]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-4">
                                <svg className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                </svg>
                                <h1 className="text-xl font-bold text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">EduPath</h1>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                                <a className="text-sm font-medium text-[var(--mutedLight)] dark:text-[var(--mutedDark)] hover:text-[var(--primary)] transition-colors" href="#">
                                    Catalog
                                </a>
                                <a className="text-sm font-medium text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]" href="#">
                                    My Learning
                                </a>
                                <a className="text-sm font-medium text-[var(--mutedLight)] dark:text-[var(--mutedDark)] hover:text-[var(--primary)] transition-colors" href="#">
                                    Wishlist
                                </a>
                                <a className="text-sm font-medium text-[var(--mutedLight)] dark:text-[var(--mutedDark)] hover:text-[var(--primary)] transition-colors" href="#">
                                    Cart
                                </a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <button className="p-2 rounded-full hover:bg-[var(--subtleLight)] dark:hover:bg-[var(--subtleDark)] text-[var(--mutedLight)] dark:text-[var(--mutedDark)] hover:text-[var(--primary)] transition-colors">
                                    <span className="material-symbols-outlined"><Bell className="size-5" /> </span>
                                </button>
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwQFCzMHzSCOnVefhDeJkxHB6zDkaPE4K9MrngHwGdHNzDDxTMpWN-oXYxB-59zLdMUGmgfnrcDW43o64ZKdkZr0xuJgB8jpbBDPmY92opoBZO0teh8rCu5PLOJsDPqIHXAOwoR2V_2dRwduEvms03JKu0RzuxdXmMOrUUnW4gbi6oNFqpIpk8kqDqXwsd17IFr3xbUElRgDROKlHo4hu6uJniBWyrKkZwfDc0AFO2So4VXardilApmCSXhz8_8_9wGNbIAobLKuE")' }}></div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <div className="flex items-center text-sm text-[var(--mutedLight)] dark:text-[var(--mutedDark)]">
                                <a onClick={() => router.back()} className="hover:text-[var(--primary)]" href="#">
                                    Course
                                </a>
                                <span className="mx-2">/</span>
                                <span className="text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Quiz</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight mt-2 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Quiz: Introduction to Programming</h2>
                            <p className="mt-2 text-sm text-[var(--mutedLight)] dark:text-[var(--mutedDark)]">
                                Passing score: <span className="font-semibold text-[var(--primary)]">70% to unlock the next lesson</span>
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div className="bg-[var(--bgLight)] dark:bg-[var(--subtleDark)] p-6 rounded-xl border border-[var(--subtleLight)] dark:border-[var(--subtleDark)]">
                                <p className="font-semibold text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Question 1 of 5</p>
                                <p className="mt-2 text-lg text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">What is the output of the following code snippet?</p>
                                <div className="mt-4">
                                    <textarea className="w-full min-h-[100px] p-3 rounded-lg bg-[var(--bgLight)] dark:bg-[var(--bgDark)] border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--mutedLight)] dark:placeholder-[var(--mutedDark)]" placeholder="Enter your answer here"></textarea>
                                </div>
                            </div>
                            <div className="bg-[var(--bgLight)] dark:bg-[var(--subtleDark)] p-6 rounded-xl border border-[var(--subtleLight)] dark:border-[var(--subtleDark)]">
                                <p className="font-semibold text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Question 2 of 5</p>
                                <p className="mt-2 text-lg text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Which of the following is NOT a programming language?</p>
                                <div className="mt-4 space-y-3">
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-2" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Python</span>
                                    </label>
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-2" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Java</span>
                                    </label>
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input defaultChecked className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-2" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">HTML</span>
                                    </label>
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-2" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">C++</span>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-[var(--bgLight)] dark:bg-[var(--subtleDark)] p-6 rounded-xl border border-[var(--subtleLight)] dark:border-[var(--subtleDark)]">
                                <p className="font-semibold text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Question 3 of 5</p>
                                <p className="mt-2 text-lg text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">What does &apos;OOP&apos; stand for in programming?</p>
                                <div className="mt-4">
                                    <input className="w-full p-3 rounded-lg bg-[var(--bgLight)] dark:bg-[var(--bgDark)] border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--mutedLight)] dark:placeholder-[var(--mutedDark)]" placeholder="Enter your answer here" type="text" />
                                </div>
                            </div>
                            <div className="bg-[var(--bgLight)] dark:bg-[var(--subtleDark)] p-6 rounded-xl border border-[var(--subtleLight)] dark:border-[var(--subtleDark)]">
                                <p className="font-semibold text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Question 4 of 5</p>
                                <p className="mt-2 text-lg text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Select the correct data type for storing text.</p>
                                <div className="mt-4 space-y-3">
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-4" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Integer</span>
                                    </label>
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input defaultChecked className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-4" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">String</span>
                                    </label>
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-4" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Boolean</span>
                                    </label>
                                    <label className="flex items-center p-4 rounded-lg border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] cursor-pointer hover:border-[var(--primary)] has-[:checked]:border-[var(--primary)] has-[:checked]:bg-[var(--primary)]/10">
                                        <input className="form-radio h-5 w-5 text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--subtleDark)] border-[var(--subtleLight)] dark:border-[var(--mutedDark)] bg-[var(--bgLight)] dark:bg-[var(--bgDark)]" name="question-4" type="radio" />
                                        <span className="ml-4 text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Float</span>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-[var(--bgLight)] dark:bg-[var(--subtleDark)] p-6 rounded-xl border border-[var(--subtleLight)] dark:border-[var(--subtleDark)]">
                                <p className="font-semibold text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">Question 5 of 5</p>
                                <p className="mt-2 text-lg text-[var(--foregroundLight)] dark:text-[var(--foregroundDark)]">What is the purpose of a loop in programming?</p>
                                <div className="mt-4">
                                    <textarea className="w-full min-h-[100px] p-3 rounded-lg bg-[var(--bgLight)] dark:bg-[var(--bgDark)] border border-[var(--subtleLight)] dark:border-[var(--subtleDark)] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--mutedLight)] dark:placeholder-[var(--mutedDark)]" placeholder="Enter your answer here"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-end">
                            <button className="bg-[var(--primary)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--primary)]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bgLight)] dark:focus:ring-offset-[var(--bgDark)]">Submit Quiz</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
