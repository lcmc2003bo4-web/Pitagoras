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

export default function Admissions() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 text-center bg-background-alt">
                <div className="container">
                    <h1 className="mb-4">Proceso de Admisión</h1>
                    <p className="text-xl text-gray-600 font-medium">Únete a nuestra comunidad educativa. ¡Abiertas las inscripciones para el próximo ciclo!</p>
                </div>
            </section>


            {/* Steps */}
            <section className="py-24">
                <div className="container text-center">
                    <h2 className="mb-16">Pasos para la Inscripción</h2>
                    <div className="flex flex-wrap justify-between gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gray-200 -z-10"></div>

                        <div className="flex-1 min-w-[200px] group">
                            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-4 border-white shadow-soft-md group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">1</div>
                            <h3 className="text-xl font-bold mb-3">Entrevista</h3>
                            <p className="text-gray-600 max-w-xs mx-auto">Solicita una reunión con el equipo directivo para conocernos.</p>
                        </div>
                        <div className="flex-1 min-w-[200px] group">
                            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-4 border-white shadow-soft-md group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">2</div>
                            <h3 className="text-xl font-bold mb-3">Evaluación</h3>
                            <p className="text-gray-600 max-w-xs mx-auto">Examen de nivelación (inglés y matemáticas) y psicotécnico.</p>
                        </div>
                        <div className="flex-1 min-w-[200px] group">
                            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-4 border-white shadow-soft-md group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">3</div>
                            <h3 className="text-xl font-bold mb-3">Matrícula</h3>
                            <p className="text-gray-600 max-w-xs mx-auto">Presentación de documentación y reserva de vacante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form */}
            <section className="py-24 bg-background-alt">
                <div className="container text-center">
                    <h2 className="mb-4">Solicitar Información</h2>
                    <p className="text-gray-600 mb-12">Completa el formulario y nos pondremos en contacto contigo.</p>
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft-md max-w-2xl mx-auto border border-gray-100">
                        <form action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Gracias por tu interés. Te contactaremos pronto.'); }}>
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
                    </div>
                </div>
            </section>

            {/* Open Days */}
            <section className="py-24 text-center">
                <div className="container">
                    <h2 className="mb-4">Visitas Guiadas (Open Days)</h2>
                    <p className="text-gray-600 mb-12 text-lg">Ven a recorrer nuestras instalaciones y conoce nuestra propuesta.</p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft-sm hover:shadow-soft-lg transition-all group hover:-translate-y-2">
                            <div className="text-accent font-bold text-xl uppercase tracking-widest mb-4">Mayo</div>
                            <div className="text-4xl font-bold font-heading text-primary mb-2 group-hover:text-secondary transition-colors">15 y 29</div>
                            <div className="flex items-center justify-center gap-2 text-gray-500 mt-4">
                                <span>🕒</span> 10:00 AM
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft-sm hover:shadow-soft-lg transition-all group hover:-translate-y-2">
                            <div className="text-accent font-bold text-xl uppercase tracking-widest mb-4">Junio</div>
                            <div className="text-4xl font-bold font-heading text-primary mb-2 group-hover:text-secondary transition-colors">12 y 26</div>
                            <div className="flex items-center justify-center gap-2 text-gray-500 mt-4">
                                <span>🕒</span> 10:00 AM
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft-sm hover:shadow-soft-lg transition-all group hover:-translate-y-2">
                            <div className="text-accent font-bold text-xl uppercase tracking-widest mb-4">Julio</div>
                            <div className="text-4xl font-bold font-heading text-primary mb-2 group-hover:text-secondary transition-colors">10</div>
                            <div className="flex items-center justify-center gap-2 text-gray-500 mt-4">
                                <span>🕒</span> 14:00 PM
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-center mb-2">Preguntas Frecuentes</h2>
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
                </div>
            </section>
        </>
    );
}
