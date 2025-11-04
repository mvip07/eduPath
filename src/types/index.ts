export type Role = 'STUDENT' | 'ADMIN'

export interface Student {
    id: string
    full_name: string
    username: string
    phone_number: string
    role: Role
    is_active: boolean
    active_term?: number
}

export interface StudentEdit {
    role: Role
    active_term: 0
    is_active: true
    username: string
    password: string
    full_name: string
    phone_number: string
}

export interface CreateStudent extends Omit<StudentEdit, 'is_active' | 'active_term'> {
    active_term: number
    password: string
}

export interface Course {
    id: number | string
    title: string
    level: string
    image_url: string
    description: string
    is_active?: boolean
    created_at?: string
}

export interface CreateCourse {
    title: string
    description: string
    level: string
    image_url: string
}

export interface UpdateCourse {
    title?: string
    description?: string
    level?: string
    image_url?: string
    is_active?: boolean
}

export interface Module {
    title: string
    order?: number
    id: number | string
    description?: string
}

export interface CreateModule {
    title: string
    order: number
    description: string
}

export interface UpdateModule {
    title: string
    order: number
    description: string
}

export interface Lesson {
    id: number | string
    title: string
    description?: string
    video_url?: string
    materials?: string
}

export interface ModulePayload {
    title: string
    order: number
    description: string
}

export type User = {
    id: string
    username: string
    full_name: string
    role: 'STUDENT' | 'ADMIN'
}

// export interface AuthContextProps {
//     user: User | null
//     loading: boolean
//     setUser: React.Dispatch<React.SetStateAction<User | null>>
// }

export interface StoredAuth {
    full_name: string
    id: string | number
    access_token: string
    role: 'ADMIN' | 'STUDENT'
}

export interface MenuItem {
    name: string
    href: string
    icon: React.ReactNode
}

export interface Type {
    id: number | string
    title: string
    description: string
}

export interface TypeEdit {
    title: string
    description: string
}