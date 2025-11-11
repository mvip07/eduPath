'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Edit3, Save, X, User, Phone, Lock, Eye, EyeOff, CheckCircle, XCircle, Calendar, Mail, ArrowLeft } from 'lucide-react'
import { StudentEdit } from '@/types'
import { cardVariants } from '@/lib/motion'
import { useStudents } from '@/hooks/useStudents'
import { getUserFromStorage } from '@/lib/helpers/userStore'

export default function ProfilePage() {
    const router = useRouter()
    const { handleUpdate, fetchStudent } = useStudents()
    const [isEditMode, setIsEditMode] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [isFetchingData, setIsFetchingData] = useState(true)
    const [userData, setUserData] = useState<StudentEdit | null>(null)

    const userId = getUserFromStorage()?.user_id
    useEffect(() => {
        const loadStudentData = async () => {
            setIsFetchingData(true)
            const res = await fetchStudent(userId as string)
            if (res) {
                setUserData(res)
            }
            setIsFetchingData(false)
        }
        loadStudentData()
    }, [fetchStudent, userId])

    const handleSave = () => {
        setIsEditMode(false)
        handleUpdate(userId as string, userData as StudentEdit)
    }

    const handleCancel = () => {
        setIsEditMode(false)
    }

    if (isFetchingData) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-100">
                <div className="text-white">{isFetchingData ? 'Yuklanmoqda...' : "Ma'lumot topilmadi."}</div>
            </div>
        )
    }

    const handleChange = <K extends keyof StudentEdit>(field: K, value: StudentEdit[K]) => {
        setUserData((prev) => {
            if (!prev) return prev
            return { ...prev, [field]: value }
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.back()} className="p-2 bg-gray-100 rounded-xl transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </motion.button>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
                            <p className="text-gray-600 mt-2">Manage your account information and preferences</p>
                        </div>
                    </div>

                    {!isEditMode ? (
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsEditMode(true)} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center gap-2">
                            <Edit3 className="w-4 h-4" />
                            Edit Profile
                        </motion.button>
                    ) : (
                        <div className="flex gap-3">
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSave} className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg flex items-center gap-2">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleCancel} className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center gap-2">
                                <X className="w-4 h-4" />
                                Cancel
                            </motion.button>
                        </div>
                    )}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-600" />
                                Personal Information
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    {isEditMode ? (
                                        <motion.div whileFocus="focus">
                                            <input type="text" value={userData?.full_name} onChange={(e) => handleChange('full_name', e.target.value)} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 border-gray-300" placeholder="Enter your full name" />
                                        </motion.div>
                                    ) : (
                                        <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{userData?.full_name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                    {isEditMode ? (
                                        <motion.div whileFocus="focus">
                                            <input type="text" value={userData?.username} onChange={(e) => handleChange('username', e.target.value)} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 border-gray-300" placeholder="Enter your username" />
                                        </motion.div>
                                    ) : (
                                        <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">@{userData?.username}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    {isEditMode ? (
                                        <motion.div whileFocus="focus" className="relative">
                                            <Phone className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input type="tel" value={userData?.phone_number} onChange={(e) => handleChange('phone_number', e.target.value)} className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 border-gray-300" placeholder="Enter your phone number" />
                                        </motion.div>
                                    ) : (
                                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                                            <Phone className="w-5 h-5 text-gray-400" />
                                            <span className="text-gray-900">{userData?.phone_number}</span>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    {isEditMode ? (
                                        <motion.div whileFocus="focus" className="relative">
                                            <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input type={showPassword ? 'text' : 'password'} value={userData?.password} onChange={(e) => handleChange('password', e.target.value)} className="w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 border-gray-300" placeholder="Enter your password" />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                                            <Lock className="w-5 h-5 text-gray-400" />
                                            <span className="text-gray-900">••••••••</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-6">
                        <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${userData?.is_active ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        <span className="text-gray-700">Status</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {userData?.is_active ? (
                                            <>
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-green-600 font-medium">Active</span>
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="w-5 h-5 text-red-500" />
                                                <span className="text-red-600 font-medium">Inactive</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-blue-500" />
                                        <span className="text-gray-700">Active Term</span>
                                    </div>
                                    <span className="text-gray-900 font-medium">{userData?.active_term}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-purple-500" />
                                        <span className="text-gray-700">Last Updated</span>
                                    </div>
                                    <span className="text-gray-900 text-sm">Today</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>

                            <div className="space-y-3">
                                <button className="w-full text-left p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">Change Password</button>
                                <button className="w-full text-left p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-medium">Privacy Settings</button>
                                <button className="w-full text-left p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium">Deactivate Account</button>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
