

export default function About() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 text-center bg-background-alt">
                <div className="container">
                    <h1 className="mb-4">Nuestra Institución</h1>
                    <p className="text-xl text-gray-600 font-medium">Más de 30 años formando personas íntegras y capaces.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
                            Nuestra Historia
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Historia y Trayectoria</h2>
                        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                            <p>Fundado en 1990, el Instituto Educativo Excelencia nació con la visión de ofrecer una educación que equilibrara la excelencia académica con el desarrollo humano profundo.</p>
                            <p>Comenzamos con un pequeño edificio y un gran sueño. Hoy, somos referentes en innovación educativa, con instalaciones modernas y una comunidad vibrante de alumnos y familias comprometidas.</p>
                            <p>A lo largo de estas décadas, hemos mantenido intacto nuestro espíritu fundacional: educar para la vida.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/assets/images/building_exterior.png"
                            alt="Fachada del Instituto"
                            className="rounded-2xl shadow-soft-xl max-w-full md:max-w-xl mx-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                        {/* Decorative element */}
                        <div className="absolute -z-10 top-10 -right-4 w-full h-full border-2 border-secondary/10 rounded-2xl"></div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="text-white mb-6">Nuestra Filosofía</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors duration-300">
                            <div className="text-4xl mb-6">🎯</div>
                            <h3 className="text-xl font-bold mb-4 text-white">Misión</h3>
                            <p className="text-white/80 leading-relaxed">Brindar una educación integral bilingüe que potencie las capacidades individuales en un entorno de valores compartidos.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors duration-300">
                            <div className="text-4xl mb-6">🔭</div>
                            <h3 className="text-xl font-bold mb-4 text-white">Visión</h3>
                            <p className="text-white/80 leading-relaxed">Ser reconocidos como una institución líder en innovación pedagógica y formación de agentes de cambio positivo.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors duration-300">
                            <div className="text-4xl mb-6">⚖️</div>
                            <h3 className="text-xl font-bold mb-4 text-white">Valores</h3>
                            <p className="text-white/80 leading-relaxed">Respeto, Responsabilidad, Solidaridad, Integridad y búsqueda constante de la Excelencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 text-center">
                <div className="container">
                    <div className="bg-background-alt rounded-3xl p-12 md:p-16 relative overflow-hidden">
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="mb-6">Nuestra Metodología</h2>
                            <p className="text-2xl text-primary font-medium mb-8">Un enfoque <strong>Constructivista y Humanista</strong>.</p>
                            <p className="text-gray-600 text-lg leading-relaxed">Creemos que el alumno es el protagonista de su propio aprendizaje. Nuestros docentes son facilitadores que guían el descubrimiento, fomentando el pensamiento crítico, la creatividad y el trabajo colaborativo. Integramos la tecnología como una herramienta al servicio del conocimiento, no como un fin en sí mismo.</p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="container text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="mb-4">Equipo Directivo</h2>
                        <p className="text-gray-500 text-lg">Liderazgo comprometido con el bienestar de cada alumno.</p>
                    </div>

                    <div className="flex flex-wrapjustify-center grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 border border-gray-100 group">
                            <div className="relative mb-6 mx-auto w-40 h-40">
                                <div className="absolute inset-0 bg-secondary/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                                <img src="/assets/images/director.png" alt="Directora General" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">María González</h3>
                            <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wider">Directora General</p>
                            <p className="text-gray-500 text-sm leading-relaxed">Lic. en Gestión Educativa con 25 años de experiencia. Apasionada por crear entornos de aprendizaje felices.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 border border-gray-100 group">
                            <div className="relative mb-6 mx-auto w-40 h-40">
                                <div className="absolute inset-0 bg-secondary/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                                <img src="/assets/images/coordinator_primary.png" alt="Coordinador Primaria" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Juan Pérez</h3>
                            <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wider">Coord. Nivel Primario</p>
                            <p className="text-gray-500 text-sm leading-relaxed">Especialista en psicopedagogía infantil. Enfocado en el desarrollo emocional y académico temprano.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 border border-gray-100 group">
                            <div className="relative mb-6 mx-auto w-40 h-40">
                                <div className="absolute inset-0 bg-secondary/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                                <img src="/assets/images/coordinator_secondary.png" alt="Coordinadora Secundaria" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">Ana Rodríguez</h3>
                            <p className="text-secondary font-medium mb-4 text-sm uppercase tracking-wider">Coord. Nivel Secundario</p>
                            <p className="text-gray-500 text-sm leading-relaxed">Máster en Educación Internacional. Lidera los programas de preparación universitaria y bilingüismo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
