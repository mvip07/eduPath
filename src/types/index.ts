export interface Student {
    id: number | string
    full_name: string
    username: string
    phone_number: string
    role: 'STUDENT' | 'ADMIN' | 'TEACHER'
    is_active: boolean
    active_term: number
}

export interface StudentEdit extends Omit<Student, 'id'> {
    password: string
}

export interface CreateStudent extends Omit<StudentEdit, 'is_active' | 'active_term'> {
    active_term: number
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
    image_url?: string
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

export interface Lesson {
    id: number | string
    title: string
    description?: string
    video_url?: string
    materials?: string
}

export interface ModulePayload {
    title: string
    description: string
}

export type User = {
    id: string
    username: string
    role: 'STUDENT' | 'ADMIN' | 'TEACHER'
}

// export interface AuthContextProps {
//     user: User | null
//     loading: boolean
//     setUser: React.Dispatch<React.SetStateAction<User | null>>
// }

export interface StoredAuth {
    access_token: string
    id: string | number
    role: 'ADMIN' | 'STUDENT'
}
