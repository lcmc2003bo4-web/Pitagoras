import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-image-container">
                    <img src="/assets/images/hero.png" alt="Estudiantes colaborando en un proyecto de ciencias" className="hero-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content container text-center">
                    <h1 className="hero-title">Formando líderes con valores y excelencia</h1>
                    <p className="hero-subtitle">Una educación integral para el futuro de tus hijos.</p>
                    <div className="hero-buttons">
                        <Link href="/admissions" className="btn btn-secondary">Admisiones</Link>
                        <Link href="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Conócenos</Link>
                    </div>
                </div>
            </section>

            {/* Quick Access Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="quick-access-grid">
                        <Link href="/admissions" className="access-card">
                            <div className="icon">📝</div>
                            <h3>Admisiones</h3>
                            <p>Inicia el proceso de inscripción.</p>
                        </Link>
                        <Link href="/community" className="access-card">
                            <div className="icon">💻</div>
                            <h3>Plataforma</h3>
                            <p>Acceso para padres y alumnos.</p>
                        </Link>
                        <Link href="/contact" className="access-card">
                            <div className="icon">📞</div>
                            <h3>Contacto</h3>
                            <p>Estamos para atenderte.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured News Section */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="text-center mb-2">Noticias Destacadas</h2>
                    <div className="news-grid">
                        <article className="news-card">
                            <div className="news-image" style={{ backgroundColor: '#ddd', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IMG</div>
                            <div className="news-content">
                                <span className="news-date">10 de Marzo, 2024</span>
                                <h3>Ganadores de la Feria de Ciencias</h3>
                                <p>Nuestros alumnos de secundaria obtuvieron el primer puesto en la competencia regional.</p>
                                <Link href="#" className="read-more">Leer más &rarr;</Link>
                            </div>
                        </article>
                        <article className="news-card">
                            <div className="news-image" style={{ backgroundColor: '#ddd', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IMG</div>
                            <div className="news-content">
                                <span className="news-date">5 de Marzo, 2024</span>
                                <h3>Inauguración del Nuevo Laboratorio</h3>
                                <p>Tecnología de punta para el aprendizaje de robótica y programación.</p>
                                <Link href="#" className="read-more">Leer más &rarr;</Link>
                            </div>
                        </article>
                        <article className="news-card">
                            <div className="news-image" style={{ backgroundColor: '#ddd', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IMG</div>
                            <div className="news-content">
                                <span className="news-date">28 de Febrero, 2024</span>
                                <h3>Apertura de Inscripciones 2025</h3>
                                <p>Ya puedes reservar tu vacante para el próximo ciclo lectivo.</p>
                                <Link href="#" className="read-more">Leer más &rarr;</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
