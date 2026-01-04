
export default function StudentLife() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header section-padding text-center bg-light">
                <div className="container">
                    <h1>Más allá del aula</h1>
                    <p>Formación integral a través del deporte, el arte y la solidaridad.</p>
                </div>
            </section>

            {/* Activities */}
            <section className="section-padding">
                <div className="container">

                    {/* Sports */}
                    <div className="activity-section" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <div className="activity-content" style={{ flex: 1 }}>
                            <h2>Deportes</h2>
                            <p className="mb-1">Fomentamos el trabajo en equipo, la disciplina y la vida sana.</p>
                            <p>Contamos con equipos competitivos en Fútbol, Vóley, Hockey y Rugby. Participamos en torneos intercolegiales regionales y nacionales.</p>
                        </div>
                        <div className="activity-image" style={{ flex: 1, height: '300px', backgroundColor: '#d1fae5', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                            ⚽️
                        </div>
                    </div>

                    {/* Arts */}
                    <div className="activity-section" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem', flexDirection: 'row-reverse' }}>
                        <div className="activity-content" style={{ flex: 1 }}>
                            <h2>Arte y Cultura</h2>
                            <p className="mb-1">Espacios para la expresión creativa y la sensibilidad estética.</p>
                            <div style={{ marginTop: '0.5rem' }}>
                                Ofrecemos talleres de:
                                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                    <li>Música y Coro</li>
                                    <li>Teatro y Comedia Musical</li>
                                    <li>Artes Visuales y Plástica</li>
                                </ul>
                            </div>
                        </div>
                        <div className="activity-image" style={{ flex: 1, height: '300px', backgroundColor: '#fce7f3', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                            🎭
                        </div>
                    </div>

                    {/* Pastoral */}
                    <div className="activity-section" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <div className="activity-content" style={{ flex: 1 }}>
                            <h2>Pastoral y Voluntariado</h2>
                            <p className="mb-1">Educando el corazón para servir a los demás.</p>
                            <p>Nuestros alumnos participan en proyectos solidarios, colectas y visitas a comedores comunitarios, desarrollando una profunda conciencia social.</p>
                        </div>
                        <div className="activity-image" style={{ flex: 1, height: '300px', backgroundColor: '#e0f2fe', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                            🤝
                        </div>
                    </div>

                </div>
            </section>

            {/* Gallery */}
            <section className="section-padding bg-primary">
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: '2rem' }}>Nuestras Instalaciones</h2>
                    <div className="gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem'
                    }}>
                        <div className="gallery-item" style={{ height: '200px', overflow: 'hidden', borderRadius: 'var(--radius-sm)', position: 'relative', cursor: 'pointer' }}>
                            <img src="/assets/images/hero.png" alt="Aulas Modernas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="gallery-item" style={{ height: '200px', overflow: 'hidden', borderRadius: 'var(--radius-sm)', position: 'relative', cursor: 'pointer' }}>
                            <img src="/assets/images/building_exterior.png" alt="Campus Verde" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="gallery-item" style={{ height: '200px', overflow: 'hidden', borderRadius: 'var(--radius-sm)', position: 'relative', cursor: 'pointer' }}>
                            <img src="/assets/images/technology.png" alt="Laboratorios" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="gallery-item" style={{ height: '200px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: 'var(--radius-sm)' }}>
                            <span style={{ fontSize: '2rem' }}>🏀</span>
                        </div>
                        <div className="gallery-item" style={{ height: '200px', background: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: 'var(--radius-sm)' }}>
                            <span style={{ fontSize: '2rem' }}>🍽️</span>
                        </div>
                        <div className="gallery-item" style={{ height: '200px', background: '#777', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: 'var(--radius-sm)' }}>
                            <span style={{ fontSize: '2rem' }}>📚</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
