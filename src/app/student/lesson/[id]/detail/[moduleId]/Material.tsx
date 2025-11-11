'use client'
import { FileText } from 'lucide-react'
import { useLessonMaterials } from '@/hooks/useLessonMaterials'

export default function MaterialTemplate({ lessonId }: { lessonId: string }) {
    const { materials } = useLessonMaterials(lessonId)
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {materials.map((material) => (
                    <div key={material.id} className="bg-white  transition-all duration-300 overflow-hidden group">
                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            <img src={material.material_url} alt={material.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        <div className="flex items-start gap-3 mb-3">
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{material.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{material.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {materials.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No materials available</h3>
                    <p className="text-gray-600">Course materials will be added here once available</p>
                </div>
            )}
        </div>
    )
}
