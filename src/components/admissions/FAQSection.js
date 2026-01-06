'use client';

import { useState } from 'react';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 bg-white first:rounded-t-xl last:rounded-b-xl overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`text-xl font-bold text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="faq-container">
            <FAQItem
                question="¿Tienen servicio de comedor?"
                answer="Sí, contamos con cocina propia y nutricionistas que elaboran un menú balanceado mensual."
            />
            <FAQItem
                question="¿Es obligatorio el uniforme?"
                answer="Sí, el uso del uniforme es obligatorio tanto para clases regulares como para educación física. Se adquiere en proveedores autorizados."
            />
            <FAQItem
                question="¿Ofrecen transporte escolar?"
                answer="La institución no posee micros propios, pero podemos facilitar el contacto de empresas de transporte de confianza que cubren la zona."
            />
            <FAQItem
                question="¿Cuál es el horario de clases?"
                answer="Primaria: 8:00 a 16:00 hs. | Secundaria: 7:45 a 16:15 hs."
            />
        </div>
    );
}
