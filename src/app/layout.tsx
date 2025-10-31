import '@/styles/globals.css'
import ToastProvider from '@/providers/ToastProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body>
                <ToastProvider>{children}</ToastProvider>
            </body>
        </html>
    )
}
