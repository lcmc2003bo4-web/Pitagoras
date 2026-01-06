
export default function StudentLife() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-20 text-center bg-background-alt overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
                    <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-3xl"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl"></div>
                </div>
                <div className="container relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-secondary/20 text-secondary font-semibold text-sm tracking-wide uppercase mb-4 shadow-sm">
                        Comunidad
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Más allá del aula</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Formación integral a través del deporte, el arte y la solidaridad.
                    </p>
                </div>
            </section>

            {/* Activities */}
            <section className="py-24">
                <div className="container space-y-24">

                    {/* Sports */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Vida Sana</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Deportes</h2>
                            <p className="text-xl text-gray-600 mb-6 font-medium">Fomentamos el trabajo en equipo, la disciplina y la superación personal.</p>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Contamos con equipos competitivos en Fútbol, Vóley, Hockey y Rugby. Participamos en torneos intercolegiales regionales y nacionales, promoviendo el fair play y la camaradería.
                            </p>
                            <ul className="grid grid-cols-2 gap-4">
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Fútbol
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Hockey
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Rugby
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span> Atletismo
                                </li>
                            </ul>
                        </div>
                        <div className="bg-green-50 rounded-3xl h-[400px] flex items-center justify-center text-8xl shadow-soft-lg transform hover:scale-[1.02] transition-transform duration-500 border border-green-100">
                            ⚽️
                        </div>
                    </div>

                    {/* Arts */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-purple-50 rounded-3xl h-[400px] flex items-center justify-center text-8xl shadow-soft-lg transform hover:scale-[1.02] transition-transform duration-500 border border-purple-100 order-2 md:order-1">
                            🎭
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Creatividad</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Arte y Cultura</h2>
                            <p className="text-xl text-gray-600 mb-6 font-medium">Espacios para la expresión creativa y la sensibilidad estética.</p>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Creemos que el arte es fundamental para el desarrollo humano. Ofrecemos talleres extracurriculares y eventos anuales donde nuestros alumnos son protagonistas.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-sm">Música y Coro</span>
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-sm">Comedia Musical</span>
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-sm">Artes Visuales</span>
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-sm">Fotografía</span>
                            </div>
                        </div>
                    </div>

                    {/* Pastoral */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Solidaridad</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">Pastoral y Voluntariado</h2>
                            <p className="text-xl text-gray-600 mb-6 font-medium">Educando el corazón para servir a los demás.</p>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Nuestros alumnos participan activamente en proyectos solidarios, colectas y visitas a comedores comunitarios, desarrollando una profunda conciencia social y empatía.
                            </p>
                            <button className="px-6 py-3 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                                Ver Proyectos Sociales
                            </button>
                        </div>
                        <div className="bg-blue-50 rounded-3xl h-[400px] flex items-center justify-center text-8xl shadow-soft-lg transform hover:scale-[1.02] transition-transform duration-500 border border-blue-100">
                            🤝
                        </div>
                    </div>

                </div>
            </section>

            {/* Gallery Mosaic */}
            <section className="py-24 bg-primary text-white pb-32">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">Infraestructura</span>
                        <h2 className="text-4xl font-bold text-white mb-6">Nuestras Instalaciones</h2>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg">
                            Un entorno diseñado para inspirar. Espacios modernos y versátiles que se adaptan a las necesidades de aprendizaje de hoy.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Large items span 2 columns/rows */}
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
                            <img src="/assets/images/building_exterior.png" alt="Campus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <span className="text-white font-bold text-xl">Campus Verde</span>
                            </div>
                        </div>

                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-gray-800">
                            <img src="/assets/images/technology.png" alt="Laboratorio" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center">
                                <span className="text-4xl drop-shadow-lg">🧪</span>
                            </div>
                        </div>

                        <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl bg-gray-700">
                            <div className="w-full h-full bg-secondary flex items-center justify-center">
                                <div className="text-center p-6">
                                    <span className="text-5xl mb-4 block">🏀</span>
                                    <h3 className="font-bold text-lg">Gimnasio Cubierto</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-white">
                            <div className="w-full h-full flex items-center justify-center bg-accent">
                                <span className="text-4xl animate-bounce">🍽️</span>
                            </div>
                        </div>

                        <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl">
                            <img src="/assets/images/hero.png" alt="Aulas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <span className="text-white font-bold text-xl">Aulas Interactivas</span>
                            </div>
                        </div>

                        <div className="col-span-2 md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl bg-gray-800">
                            <div className="w-full h-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center p-8 text-center hover:bg-white/20 transition-colors">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Biblioteca Digital</h3>
                                    <p className="text-white/70">Más de 5000 recursos disponibles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
