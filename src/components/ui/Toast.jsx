'use client';
import { useEffect } from 'react';

export default function Toast({ message, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 bg-gray-900 border border-gray-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 animate-fade-in-up z-50 max-w-sm backdrop-blur-md bg-opacity-95">
            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <div>
                <h4 className="font-bold text-sm">¡Enviado!</h4>
                <p className="text-gray-300 text-sm mt-0.5 leading-tight">{message}</p>
            </div>
            <button onClick={onClose} className="ml-2 text-gray-500 hover:text-white transition-colors">
                ✕
            </button>
        </div>
    );
}
