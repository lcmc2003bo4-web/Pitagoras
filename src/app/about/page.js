
export default function About() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header section-padding text-center bg-light">
                <div className="container">
                    <h1>Nuestra Institución</h1>
                    <p>Más de 30 años formando personas íntegras y capaces.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="section-padding">
                <div className="container grid-2-col">
                    <div className="history-content">
                        <h2>Historia y Trayectoria</h2>
                        <p className="mb-1">Fundado en 1990, el Instituto Educativo Excelencia nació con la visión de ofrecer una educación que equilibrara la excelencia académica con el desarrollo humano profundo.</p>
                        <p className="mb-1">Comenzamos con un pequeño edificio y un gran sueño. Hoy, somos referentes en innovación educativa, con instalaciones modernas y una comunidad vibrante de alumnos y familias comprometidas.</p>
                        <p>A lo largo de estas décadas, hemos mantenido intacto nuestro espíritu fundacional: educar para la vida.</p>
                    </div>
                    <div className="history-image">
                        <img src="/assets/images/building_exterior.png" alt="Fachada del Instituto" className="rounded shadow-lg" />
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="section-padding bg-primary text-white">
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: '3rem' }}>Nuestra Filosofía</h2>
                    <div className="grid-3-col">
                        <div className="value-card">
                            <div className="icon-lg">🎯</div>
                            <h3>Misión</h3>
                            <p>Brindar una educación integral bilingüe que potencie las capacidades individuales en un entorno de valores compartidos.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-lg">🔭</div>
                            <h3>Visión</h3>
                            <p>Ser reconocidos como una institución líder en innovación pedagógica y formación de agentes de cambio positivo.</p>
                        </div>
                        <div className="value-card">
                            <div className="icon-lg">⚖️</div>
                            <h3>Valores</h3>
                            <p>Respeto, Responsabilidad, Solidaridad, Integridad y búsqueda constante de la Excelencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="section-padding text-center">
                <div className="container">
                    <div className="methodology-box">
                        <h2>Nuestra Metodología</h2>
                        <p className="lead">Un enfoque <strong>Constructivista y Humanista</strong>.</p>
                        <p className="max-w-800 center-block">Creemos que el alumno es el protagonista de su propio aprendizaje. Nuestros docentes son facilitadores que guían el descubrimiento, fomentando el pensamiento crítico, la creatividad y el trabajo colaborativo. Integramos la tecnología como una herramienta al servicio del conocimiento, no como un fin en sí mismo.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-light">
                <div className="container text-center">
                    <h2>Equipo Directivo</h2>
                    <p className="mb-2">Liderazgo comprometido con el bienestar de cada alumno.</p>

                    <div className="team-grid">
                        <div className="team-card">
                            <img src="/assets/images/director.png" alt="Directora General" className="team-photo" />
                            <h3>María González</h3>
                            <p className="role">Directora General</p>
                            <p className="bio">Lic. en Gestión Educativa con 25 años de experiencia. Apasionada por crear entornos de aprendizaje felices.</p>
                        </div>
                        <div className="team-card">
                            <img src="/assets/images/coordinator_primary.png" alt="Coordinador Primaria" className="team-photo" />
                            <h3>Juan Pérez</h3>
                            <p className="role">Coordinador Nivel Primario</p>
                            <p className="bio">Especialista en psicopedagogía infantil. Enfocado en el desarrollo emocional y académico temprano.</p>
                        </div>
                        <div className="team-card">
                            <img src="/assets/images/coordinator_secondary.png" alt="Coordinadora Secundaria" className="team-photo" />
                            <h3>Ana Rodríguez</h3>
                            <p className="role">Coordinadora Nivel Secundario</p>
                            <p className="bio">Máster en Educación Internacional. Lidera los programas de preparación universitaria y bilingüismo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
