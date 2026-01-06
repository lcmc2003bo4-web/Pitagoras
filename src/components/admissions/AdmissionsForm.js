'use client';

import { useState } from 'react';
import Toast from '@/components/ui/Toast';

export default function AdmissionsForm() {
    const [showToast, setShowToast] = useState(false);

    return (
        <>
            <form action="#" method="POST" onSubmit={(e) => { e.preventDefault(); setShowToast(true); e.target.reset(); }}>
                <div className="mb-6 text-left">
                    <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Nombre del Apoderado</label>
                    <input type="text" id="name" required placeholder="Tu nombre completo" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
                <div className="mb-6 text-left">
                    <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Correo Electrónico</label>
                    <input type="email" id="email" required placeholder="ejemplo@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
                <div className="mb-6 text-left">
                    <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Teléfono</label>
                    <input type="tel" id="phone" required placeholder="+54 9 11..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
                <div className="mb-8 text-left">
                    <label htmlFor="level" className="block mb-2 font-semibold text-gray-700">Nivel de Interés</label>
                    <select id="level" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white">
                        <option value="primaria">Nivel Primario</option>
                        <option value="secundaria">Nivel Secundario</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-full py-4 text-lg shadow-lg hover:shadow-xl">Enviar Solicitud</button>
            </form>

            <Toast
                message="Gracias por tu interés. Te contactaremos pronto."
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </>
    );
}
