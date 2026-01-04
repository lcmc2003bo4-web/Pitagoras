
export default function Academics() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header section-padding text-center bg-light">
                <div className="container">
                    <h1>Excelencia Académica</h1>
                    <p>Curriculum bilingüe enfocado en el desarrollo de competencias para el siglo XXI.</p>
                </div>
            </section>

            {/* Levels Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="level-card" style={{ background: '#fff', borderLeft: '5px solid var(--color-primary)', padding: '2rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                        <div className="level-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2>Nivel Primario</h2>
                            <div className="level-icon" style={{ fontSize: '2.5rem', color: 'var(--color-secondary)' }}>🎒</div>
                        </div>
                        <p className="mb-1"><strong>Enfoque:</strong> Desarrollo integral, seguridad y amor por el aprendizaje.</p>
                        <p>En esta etapa fundacional, priorizamos el aprendizaje a través de la experiencia y el juego constructivo. Fomentamos la curiosidad natural del niño y consolidamos las habilidades básicas de lectoescritura y cálculo en un entorno bilingüe inmersivo.</p>
                    </div>

                    <div className="level-card" style={{ background: '#fff', borderLeft: '5px solid var(--color-secondary)', padding: '2rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                        <div className="level-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2>Nivel Secundario</h2>
                            <div className="level-icon" style={{ fontSize: '2.5rem', color: 'var(--color-secondary)' }}>🎓</div>
                        </div>
                        <p className="mb-1"><strong>Enfoque:</strong> Autonomía, rigor académico y preparación universitaria.</p>
                        <p>Preparamos a nuestros alumnos para los desafíos de la educación superior y el mundo laboral. Nuestro programa incluye orientación vocacional personalizada, proyectos interdisciplinarios y certificaciones internacionales.</p>
                    </div>
                </div>
            </section>

            {/* Use of Technology */}
            <section className="section-padding tech-section" style={{ backgroundColor: '#111', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                <div className="container tech-content" style={{ zIndex: 2, position: 'relative' }}>
                    <div className="tech-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ color: 'var(--color-white)' }}>Tecnología e Innovación</h2>
                            <p className="text-white mb-2">Más allá de usar dispositivos, enseñamos a crear y resolver problemas con tecnología.</p>
                            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', color: '#ccc' }}>
                                <li className="mb-1">Robótica y programación desde nivel primario.</li>
                                <li className="mb-1">Laboratorio de ciencias con equipamiento digital.</li>
                                <li className="mb-1">Aulas virtuales y plataformas de aprendizaje colaborativo.</li>
                            </ul>
                        </div>
                        <div>
                            <img src="/assets/images/technology.png" alt="Estudiantes usando tecnología" className="tech-img" style={{ borderRadius: 'var(--radius-md)', boxShadow: '0 0 20px rgba(0,255,200,0.2)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Languages */}
            <section className="section-padding text-center">
                <div className="container">
                    <h2>Formación Bilingüe</h2>
                    <p className="mb-2">Ciudadanos del mundo, capaces de comunicarse sin fronteras.</p>

                    <div className="grid-3-col">
                        <div className="value-card" style={{ borderColor: '#eee', background: 'white' }}>
                            <h3>Inglés Intensivo</h3>
                            <p>Inmersión desde sala de 3 años. Materias curriculares dictadas en inglés (Science, History, Lit).</p>
                        </div>
                        <div className="value-card" style={{ borderColor: '#eee', background: 'white' }}>
                            <h3>Certificaciones</h3>
                            <p>Centro preparador de exámenes Cambridge (PET, FCE, CAE) y TOEFL.</p>
                        </div>
                        <div className="value-card" style={{ borderColor: '#eee', background: 'white' }}>
                            <h3>Intercambios</h3>
                            <p>Oportunidades de viajes culturales y académicos a países de habla inglesa en los últimos años.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
