'use client'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function StudentHeader() {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.removeItem(process.env.NEXT_PUBLIC_EDUPATH_TOKEN || 'EDUPATH_TOKEN')
        router.push('/auth/login')
    }
    return (
        <aside className="flex flex-col w-64 bg-[var(--bgLight)] dark:bg-[var(--bgDark)] p-6 border-r border-[var(--primary)]/20 dark:border-[var(--primary)]/30">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLdLX4bvl0wvSHIpJ9TN9e1wXs60uhvSDuDUFAD9GqkBZ406b-DM4DsHszWCLCG-GX-Axp9gZlhEWXdJr3xYFyOl1OADYX9rAuG9tYaEpB3TsXgWISSZ85-XDR25wnwMk7vXcPfmdeVBCobofb5e001cNA5Bsq-KQhiFjmT9-kURwQqbNqpC7MGK-U2drk-wZXbN8My4oxgMxU6bTA72SViCXIHf4LJbhvK2RURSqBauJm2JunI0zCDgBHT_UBkA2xqf2yjMVbOqo")' }}></div>
                <h1 className="text-black dark:text-white text-lg font-bold">Sophia</h1>
            </div>
            <nav className="flex flex-col gap-2 flex-grow">
                <a className="flex items-center gap-3 px-4 py-2 text-white bg-[var(--primary)] rounded-lg" href="#">
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                    </svg>
                    <span className="text-sm font-medium">Home</span>
                </a>
                <a className="flex items-center gap-3 px-4 py-2 text-black dark:text-white hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 rounded-lg" href="#">
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
                    </svg>
                    <span className="text-sm font-medium">Catalog</span>
                </a>
                <a className="flex items-center gap-3 px-4 py-2 text-black dark:text-white hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 rounded-lg" href="#">
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path>
                    </svg>
                    <span className="text-sm font-medium">Bookmarks</span>
                </a>
            </nav>
            <div className="mt-auto">
                <button className="flex w-full items-center justify-center rounded-lg py-2.5 px-2 bg-[var(--primary)] text-white text-sm font-bold leading-normal tracking-wide hover:bg-[var(--primary)]/90">
                    <span>Invite</span>
                </button>
                <button onClick={handleLogout} className="flex items-center gap-3 my-2 w-full px-2 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors">
                    <LogOut className="w-5 h-5 opacity-70" />
                    <span>Logout</span>
                </button>
                {/* <a className="flex items-center gap-3 px-2 py-2.5 mt-2 text-black dark:text-white hover:bg-[var(--primary)]/10 dark:hover:bg-[var(--primary)]/20 rounded-lg" href="#">
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                    </svg>
                    <span className="text-sm font-medium">Help and Docs</span>
                </a> */}
            </div>
        </aside>
    )
}
