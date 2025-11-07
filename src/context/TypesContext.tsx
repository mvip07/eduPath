'use client'
import { createContext, useContext, ReactNode } from 'react'
import { useTypes } from '@/hooks/useTypes'

const TypesContext = createContext<ReturnType<typeof useTypes> | null>(null)

export const TypesProvider = ({ children }: { children: ReactNode }) => {
    const types = useTypes()
    return <TypesContext.Provider value={types}>{children}</TypesContext.Provider>
}

export const useTypesContext = () => {
    const context = useContext(TypesContext)
    if (!context) throw new Error('useTypesContext must be used inside <TypesProvider>')
    return context
}
