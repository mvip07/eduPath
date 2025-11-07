'use client'

import React, { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { Modal } from './Modal'

export type ModalType = 'EDIT' | 'DELETE' | 'CREATE' | 'INFO'

export interface ModalOptions {
    title?: string
    formId?: string
    btnTitle?: string
    content?: React.ReactNode
    type?: ModalType
}

interface ModalContextType {
    openModal: (options: ModalOptions) => void
    closeModal: () => void
    isOpen: boolean
    modalData: ModalOptions | null
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = React.memo(({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalData, setModalData] = useState<ModalOptions | null>(null)

    const openModal = useCallback((options: ModalOptions) => {
        setModalData(options)
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsOpen(false)
        setModalData(null)
    }, [])

    const contextValue = useMemo(
        () => ({
            openModal,
            closeModal,
            isOpen,
            modalData,
        }),
        [openModal, closeModal, isOpen, modalData]
    )

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
            {isOpen && modalData && <Modal onClose={closeModal} title={modalData.title || ''} btnTitle={modalData.btnTitle || ''} type={modalData.type || 'INFO'} content={modalData.content || null} formId={modalData.formId || 'modal-form'} />}
        </ModalContext.Provider>
    )
})

ModalProvider.displayName = 'ModalProvider'

export const useModalContext = (): ModalContextType => {
    const context = useContext(ModalContext)
    if (!context) throw new Error('useModalContext must be used within a ModalProvider')
    return context
}
