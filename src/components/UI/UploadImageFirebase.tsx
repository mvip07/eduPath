'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { ImagePlus, Loader2 } from 'lucide-react'
import { uploadImageToFirebase } from '@/utils/uploadImageToFirebase'

export const ImageUploader = ({ imageUrl, onChange }: { imageUrl: string; onChange: (url: string) => void }) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [uploading, setUploading] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleFileUpload = async (file: File) => {
        try {
            setUploading(true)
            const url = await uploadImageToFirebase(file, setProgress)
            onChange(url)
            toast.success('Image uploaded successfully!')
        } catch {
            toast.error('Upload failed!')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="w-full flex flex-col items-center gap-3">
            {imageUrl ? (
                <motion.div whileHover={{ scale: 1.02 }} className="relative w-full h-60 rounded-2xl overflow-hidden border border-gray-200 shadow">
                    <Image src={imageUrl} alt="Preview" width={100} height={100} className="w-full h-full object-cover" />
                    <button onClick={() => fileInputRef.current?.click()} className="absolute inset-0 bg-black/40 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-all">
                        Change Image
                    </button>
                </motion.div>
            ) : (
                <div onClick={() => fileInputRef.current?.click()} className="w-full border-2 border-dashed border-gray-300 rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                    {uploading ? (
                        <div className="flex flex-col items-center">
                            <Loader2 className="animate-spin w-6 h-6 text-blue-500 mb-2" />
                            <span className="text-sm text-gray-600">{progress}%</span>
                        </div>
                    ) : (
                        <>
                            <ImagePlus className="w-10 h-10 text-gray-400 mb-2" />
                            <p className="text-gray-500 text-sm">Click to upload image</p>
                        </>
                    )}
                </div>
            )}
            <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileUpload(file)
                }}
            />
            <input type="url" value={imageUrl} onChange={(e) => onChange(e.target.value)} placeholder="Or paste image URL" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
    )
}