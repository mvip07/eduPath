import { TypesProvider } from '@/context/TypesContext'

export default function Rootlayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <TypesProvider>{children}</TypesProvider>
}
