import AuthNavbar from "@/components/AuthNavbar"
export default function Login() {
    return (
        <div className="bg-[var(--bgLight)] dark:bg-[var(--bgDark)] font-display text-slate-800 dark:text-slate-200">
            <div className="flex flex-col min-h-screen">
                <AuthNavbar />
                <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 bg-white dark:bg-[var(--bgDark)] rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none dark:border dark:border-slate-800">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back</h2>
                            <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">Sign in to continue to your dashboard.</p>
                        </div>
                        <form action="#" className="mt-8 space-y-6" method="POST">
                            <input name="remember" type="hidden" value="true" />
                            <div className="rounded-lg space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input autoComplete="email" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 placeholder-slate-500 text-slate-900 dark:text-slate-50 rounded-lg focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] focus:z-10 sm:text-sm" id="email-address" name="email" placeholder="Enter your email" required type="email" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="password">
                                        Password
                                    </label>
                                    <input autoComplete="current-password" className="form-input relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-[var(--bgLight)] dark:bg-slate-800 placeholder-slate-500 text-slate-900 dark:text-slate-50 rounded-lg focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] focus:z-10 sm:text-sm" id="password" name="password" placeholder="Enter your password" required type="password" />
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
                        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                            Dont have an account?
                            <a className="font-medium text-[var(--primary)] hover:text-opacity-80" href="/auth/register">
                                Sign up
                            </a>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )
}
