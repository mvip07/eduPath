'use client'
import { useModalContext } from './ModalProvider'

export const useModal = () => {
    const { openModal, closeModal } = useModalContext()
    return { openModal, closeModal }
}