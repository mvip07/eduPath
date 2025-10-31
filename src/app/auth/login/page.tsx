'use client'

import { useStudents } from '@/hooks/useStudents'
import { useState } from 'react'

export default function Login() {
    const [user, setUser] = useState<{ username: string; password: string }>({
        username: '',
        password: '',
    })
    const { loginSubmit } = useStudents()

    return (
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">Welcome back</h2>
                    <p className="mt-2 text-center text-sm text-slate-600">Sign in to continue to your dashboard.</p>
                </div>

                <form onSubmit={(e) => loginSubmit(e, user.username, user.password)} className="mt-8 space-y-6">
                    <div className="rounded-lg space-y-4">
                        <div>
                            <input onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))} autoComplete="email" className="form-input relative block w-full px-3 py-3 border border-slate-300 bg-[var(--bgLight)] placeholder-slate-500 text-slate-900 rounded-lg focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] focus:z-10 sm:text-sm" id="username" name="username" placeholder="Enter your username" required type="text" />
                        </div>

                        <div>
                            <input onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))} autoComplete="current-password" className="form-input relative block w-full px-3 py-3 border border-slate-300 bg-[var(--bgLight)] placeholder-slate-500 text-slate-900 rounded-lg focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] focus:z-10 sm:text-sm" id="password" name="password" placeholder="Enter your password" required type="password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a className="font-medium text-[var(--primary)] hover:text-opacity-80" href="#">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[var(--primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]" type="submit">
                            Log in
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                    Don&apos;t have an account?{' '}
                    <a className="font-medium text-[var(--primary)] hover:text-opacity-80" href="/auth/register">
                        Sign up
                    </a>
                </p>
            </div>
        </main>
    )
}
