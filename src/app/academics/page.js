import Image from 'next/image';

export const metadata = {
    title: 'Propuesta Académica | Instituto Educativo Excelencia',
    description: 'Nivel primario y secundario con formación bilingüe, tecnología innovadora y preparación universitaria.',
};

export default function Academics() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-20 text-center bg-background-alt overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
                    <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full bg-secondary/10 blur-3xl"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl"></div>
                </div>
                <div className="container relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-secondary/20 text-secondary font-semibold text-sm tracking-wide uppercase mb-4 shadow-sm">
                        Propuesta Educativa
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Excelencia Académica</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Curriculum bilingüe enfocado en el desarrollo de competencias para el siglo XXI, diseñado para potenciar el talento único de cada alumno.
                    </p>
                </div>
            </section>

            {/* Levels Section */}
            <section className="py-24">
                <div className="container space-y-12">
                    {/* Primary Level Card */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft-md border border-gray-100 relative overflow-hidden group hover:shadow-soft-xl transition-all duration-300">
                        <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                                🎒
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-primary">Nivel Primario</h2>
                                <p className="text-lg font-medium text-secondary mb-4">Enfoque: <span className="text-gray-600 font-normal">Desarrollo integral, seguridad y amor por el aprendizaje.</span></p>
                                <p className="text-gray-600 leading-relaxed">
                                    En esta etapa fundacional, priorizamos el aprendizaje a través de la experiencia y el juego constructivo. Fomentamos la curiosidad natural del niño y consolidamos las habilidades básicas de lectoescritura y cálculo en un entorno bilingüe inmersivo.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Level Card */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft-md border border-gray-100 relative overflow-hidden group hover:shadow-soft-xl transition-all duration-300">
                        <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                                🎓
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-primary">Nivel Secundario</h2>
                                <p className="text-lg font-medium text-accent mb-4">Enfoque: <span className="text-gray-600 font-normal">Autonomía, rigor académico y preparación universitaria.</span></p>
                                <p className="text-gray-600 leading-relaxed">
                                    Preparamos a nuestros alumnos para los desafíos de la educación superior y el mundo laboral. Nuestro programa incluye orientación vocacional personalizada, proyectos interdisciplinarios y certificaciones internacionales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use of Technology */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent blur-[100px] rounded-full"></div>
                </div>

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Innovación</span>
                                <h2 className="text-4xl font-bold mb-4 text-white">Tecnología en el Aula</h2>
                                <p className="text-xl text-white/80">
                                    Más allá de usar dispositivos, enseñamos a <span className="text-white font-semibold">crear y resolver problemas</span> con tecnología.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1 shrink-0">✓</div>
                                    <p className="text-white/90">Robótica y programación curricular desde nivel primario.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1 shrink-0">✓</div>
                                    <p className="text-white/90">Laboratorio de ciencias con equipamiento digital de última generación.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1 shrink-0">✓</div>
                                    <p className="text-white/90">Aulas virtuales y plataformas de aprendizaje colaborativo (LMS).</p>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent opacity-30 blur-2xl rounded-3xl"></div>
                            <div className="relative w-full h-[400px] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                                <Image
                                    src="/assets/images/technology.png"
                                    alt="Estudiantes usando tecnología"
                                    fill
                                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Languages - Bilingual Formation */}
            <section className="py-32 bg-gray-50 relative">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Idioma Inglés</span>
                        <h2 className="mb-6">Formación Bilingüe</h2>
                        <p className="text-gray-600 text-xl">
                            Formamos ciudadanos del mundo, capaces de comunicarse sin fronteras y acceder a oportunidades globales.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Inglés Intensivo</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Inmersión total desde sala de 3 años. Materias curriculares dictadas íntegramente en inglés como <strong>Science, History y Literature</strong>, fomentando el bilingüismo natural.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Certificaciones</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Somos centro preparador oficial de exámenes internacionales. Al egresar, nuestros alumnos obtienen certificaciones <strong>Cambridge (FCE, CAE) y TOEFL</strong>.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Intercambios</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Vivir el idioma. Ofrecemos oportunidades exclusivas de <strong>viajes culturales y académicos</strong> a países de habla inglesa para alumnos de ciclo superior.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
