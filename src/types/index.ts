export type Role = 'STUDENT' | 'ADMIN'

export interface Student {
    id: string
    role: Role
    type_id: string
    username: string
    full_name: string
    is_active: boolean
    active_term: number
    phone_number: string
}

export interface StudentEdit {
    role: Role
    type_id: string
    username: string
    password: string
    full_name: string
    is_active: boolean
    active_term: number
    phone_number: string
}

export interface Course {
    id: string
    title: string
    level: string
    type_id: string
    image_url: string
    description: string
    is_active?: boolean
    created_at?: string
}

export interface CourseEdit {
    title: string
    level: string
    type_id: string
    image_url: string
    is_active: boolean
    description: string
}

export interface Module {
    id: string
    title: string
    order: number
    description: string
}

export interface ModuleEdit {
    title: string
    order: number
    description: string
}

export interface Lesson {
    id: string
    title: string
    video_url: string
    materials: string
    description: string
}

export interface ModulePayload {
    title: string
    order: number
    description: string
}

export type User = {
    id: string
    role: Role
    username: string
    full_name: string
}

export interface StoredAuth {
    user_id: string
    type_id: string
    full_name: string
    access_token: string
    role: Role
}

export interface MenuItem {
    name: string
    href: string
    icon: React.ReactNode
}

export interface Type {
    id: string
    title: string
    description: string
}

export interface TypeEdit {
    title: string
    description: string
}

export interface CourseContent {
    id: string
    title: string
    content_url: string
    description: string
}

export interface CourseContentEdit {
    title?: string
    content_url?: string
    description?: string
}
