'use client';

import { useState } from 'react';
import Toast from '@/components/ui/Toast';

export default function ContactForm() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input type="text" placeholder="Tu Nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <input type="email" placeholder="Tu Email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
                <textarea placeholder="¿En qué podemos ayudarte?" rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50"></textarea>
                <button type="submit" className="btn btn-primary w-full">Enviar Mensaje</button>
            </form>

            <Toast
                message="Tu mensaje ha sido enviado. Te responderemos a la brevedad."
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </>
    );
}
