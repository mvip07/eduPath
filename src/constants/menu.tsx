import { BookOpen, Home, LayoutDashboard, LifeBuoy, Users, Type } from 'lucide-react'

export const AdminMenu = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Students', href: '/admin/students', icon: <Users className="w-5 h-5" /> },
    { name: 'Courses', href: '/admin/courses', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Types', href: '/admin/types', icon: <Type className="w-5 h-5" /> },
    { name: 'Support', href: '/admin/support', icon: <LifeBuoy className="w-5 h-5" /> },
]

export const StudentMenu = [{ name: 'Home', href: '/student', icon: <Home className="w-5 h-5" /> }]
