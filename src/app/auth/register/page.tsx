'use client'
import { useRouter } from 'next/navigation'
import { useRegister } from '@/hooks/useRegister'

export default function Register() {
    const router = useRouter()
    const { formData, handleChange, handleSubmit } = useRegister()

    return (
        <div className="bg-[var(--bgLight)] dark:bg-[var(--bgDark)] font-display text-slate-800 dark:text-slate-200">
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 bg-white dark:bg-[var(--bgDark)] rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none dark:border dark:border-slate-800">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Create User</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="rounded-lg space-y-4">
                                <input name="active_term" placeholder="Full Name" value={formData?.active_term} onChange={handleChange} required type="text" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 rounded-lg focus:outline-none" />
                                <input name="full_name" placeholder="Full Name" value={formData?.full_name} onChange={handleChange} required type="text" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 rounded-lg focus:outline-none" />
                                <input name="username" placeholder="Username" value={formData?.username} onChange={handleChange} required type="text" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 rounded-lg focus:outline-none" />
                                <input name="phone_number" placeholder="Phone Number (+998...)" value={formData?.phone_number} onChange={handleChange} required type="text" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 rounded-lg focus:outline-none" />
                                <input name="password" placeholder="Password" value={formData?.password} onChange={handleChange} required type="password" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 rounded-lg focus:outline-none" />
                                <select value={formData?.role} onChange={handleChange} required className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 rounded-lg focus:outline-none">
                                    <option value="STUDENT">STUDENT</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>

                            <div className="flex gap-4 items-center justify-center">
                                <button onClick={() => router.back()} type="submit" className="group relative text-nowrap flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[var(--primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]">
                                    Go Back
                                </button>
                                <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[var(--primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}
