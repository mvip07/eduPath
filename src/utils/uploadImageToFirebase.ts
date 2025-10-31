import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '@/lib/firebase'

export const uploadImageToFirebase = (file: File, onProgress?: (progress: number) => void): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fileRef = ref(storage, `/my-zone-online/courses/${Date.now()}-${file.name}`)
        const uploadTask = uploadBytesResumable(fileRef, file)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                onProgress?.(Math.round(progress))
            },
            (error) => reject(error),
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                resolve(downloadURL)
            }
        )
    })
}
