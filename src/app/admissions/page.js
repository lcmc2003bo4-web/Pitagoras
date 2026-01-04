'use client';

import { useState } from 'react';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`} style={{ background: 'white', borderBottom: '1px solid #eee' }}>
            <div
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '1.5rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {question}
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            <div
                className="faq-answer"
                style={{
                    maxHeight: isOpen ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'maxHeight 0.3s ease',
                    padding: isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem',
                    color: 'var(--color-text-light)'
                }}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default function Admissions() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header section-padding text-center bg-light">
                <div className="container">
                    <h1>Proceso de Admisión</h1>
                    <p>Únete a nuestra comunidad educativa. ¡Abiertas las inscripciones para el próximo ciclo!</p>
                </div>
            </section>

            {/* Steps */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2>Pasos para la Inscripción</h2>
                    <div className="steps-container" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', margin: '4rem 0', flexWrap: 'wrap', gap: '2rem' }}>
                        {/* Note: ::before pseudo-element for line is tricky in inline styles, skipped for now or needs CSS module */}
                        <div className="step-item" style={{ flex: 1, textAlign: 'center', minWidth: '200px' }}>
                            <div className="step-number" style={{ width: '80px', height: '80px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem auto', border: '5px solid white', boxShadow: 'var(--shadow-sm)' }}>1</div>
                            <h3>Entrevista</h3>
                            <p>Solicita una reunión con el equipo directivo para conocernos.</p>
                        </div>
                        <div className="step-item" style={{ flex: 1, textAlign: 'center', minWidth: '200px' }}>
                            <div className="step-number" style={{ width: '80px', height: '80px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem auto', border: '5px solid white', boxShadow: 'var(--shadow-sm)' }}>2</div>
                            <h3>Evaluación</h3>
                            <p>Examen de nivelación (inglés y matemáticas) y psicotécnico.</p>
                        </div>
                        <div className="step-item" style={{ flex: 1, textAlign: 'center', minWidth: '200px' }}>
                            <div className="step-number" style={{ width: '80px', height: '80px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1rem auto', border: '5px solid white', boxShadow: 'var(--shadow-sm)' }}>3</div>
                            <h3>Matrícula</h3>
                            <p>Presentación de documentación y reserva de vacante.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form */}
            <section className="section-padding bg-light">
                <div className="container text-center">
                    <h2>Solicitar Información</h2>
                    <p className="mb-2">Completa el formulario y nos pondremos en contacto contigo.</p>
                    <div className="form-box" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', maxWidth: '600px', margin: '0 auto' }}>
                        <form action="#" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Gracias por tu interés. Te contactaremos pronto.'); }}>
                            <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nombre del Apoderado</label>
                                <input type="text" id="name" required placeholder="Tu nombre completo" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Correo Electrónico</label>
                                <input type="email" id="email" required placeholder="ejemplo@email.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Teléfono</label>
                                <input type="tel" id="phone" required placeholder="+54 9 11..." style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }} />
                            </div>
                            <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                                <label htmlFor="level" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nivel de Interés</label>
                                <select id="level" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }}>
                                    <option value="primaria">Nivel Primario</option>
                                    <option value="secundaria">Nivel Secundario</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Solicitud</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Open Days */}
            <section className="section-padding text-center">
                <div className="container">
                    <h2>Visitas Guiadas (Open Days)</h2>
                    <p className="mb-2">Ven a recorrer nuestras instalaciones.</p>
                    <div className="grid-3-col" style={{ justifyContent: 'center' }}>
                        <div className="value-card" style={{ borderColor: '#eee' }}>
                            <h3>Mayo</h3>
                            <p className="lead" style={{ margin: 0 }}>15 y 29</p>
                            <p>10:00 AM</p>
                        </div>
                        <div className="value-card" style={{ borderColor: '#eee' }}>
                            <h3>Junio</h3>
                            <p className="lead" style={{ margin: 0 }}>12 y 26</p>
                            <p>10:00 AM</p>
                        </div>
                        <div className="value-card" style={{ borderColor: '#eee' }}>
                            <h3>Julio</h3>
                            <p className="lead" style={{ margin: 0 }}>10</p>
                            <p>14:00 PM</p>
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
