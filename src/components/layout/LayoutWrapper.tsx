'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { MenuItem } from '@/types'

const LG_BREAKPOINT = 1024

export default function Layout({ menuItems }: { menuItems: MenuItem[] }) {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHasMounted(true)
        }, 0)

        const checkSidebarState = () => {
            const isLargeScreen = window.innerWidth >= LG_BREAKPOINT
            setIsSidebarOpen(isLargeScreen)
        }
        const handleResize = () => checkSidebarState()
        window.addEventListener('resize', handleResize)
        checkSidebarState()
        return () => window.removeEventListener('resize', handleResize)
    }, [pathname])

    if (!hasMounted) {
        return null
    }

    return (
        <>
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar menuItems={menuItems} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </>
    )
}
