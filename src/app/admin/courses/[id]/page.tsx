'use client'
import { motion } from 'framer-motion'
import { staggeredList } from '@/lib/motion'
import CourseContent from './Content'
import CourseModule from './Module'

export default function CourseDetail() {
    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className='space-y-8'>
            <CourseContent />
            <CourseModule />
        </motion.div>
    )
}
