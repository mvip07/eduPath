import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
}

export const staggeredList: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}
