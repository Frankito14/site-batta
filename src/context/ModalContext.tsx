"use client"

import {
    createContext,
    useContext,
    useState,
    useCallback,
} from 'react';

import type { FC, ReactNode } from 'react';

import 'animate.css';

import { useEffect } from 'react';

type ModalContextType = {
    showModal: (contenido: ReactNode) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [contenido, setContenido] = useState<ReactNode>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const navElements = document.querySelectorAll('nav.fixed');
        if (visible) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.classList.add('overflow-hidden');
            
            navElements.forEach(el => {
                (el as HTMLElement).style.paddingRight = `${scrollbarWidth}px`;
            });
        } else {
            document.body.style.paddingRight = '';
            document.body.classList.remove('overflow-hidden');
            
            navElements.forEach(el => {
                (el as HTMLElement).style.paddingRight = '';
            });
        }

        return () => {
            document.body.style.paddingRight = '';
            document.body.classList.remove('overflow-hidden');
            navElements.forEach(el => {
                (el as HTMLElement).style.paddingRight = '';
            });
        };
    }, [visible]);

    const showModal = useCallback((contenidoJSX: ReactNode) => {
        setContenido(contenidoJSX);
        setVisible(true);
    }, []);

    const closeModal = useCallback(() => {
        setVisible(false);
        setContenido(null);
    }, []);

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}

            {visible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
                    <div className="w-auto border-2 rounded-xl shadow-lg h-auto relative animate__animated animate__fadeInUp animate__faster">
                        <button
                            onClick={closeModal}
                            className="absolute z-50 px-2 top-1 right-1 font-black text-red-600 hover:text-red-900 hover:cursor-pointer text-2xl"
                            aria-label="Cerrar modal"
                        >
                            &times;
                        </button>
                        {contenido}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal debe usarse dentro de ModalProvider');
    }
    return context;
};