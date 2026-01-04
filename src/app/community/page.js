'use client';

import Link from 'next/link';

export default function Community() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header section-padding text-center bg-light">
                <div className="container">
                    <h1>Espacio Comunidad</h1>
                    <p>Noticias, eventos y acceso a la plataforma de gestión académica.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container grid-2-col" style={{ alignItems: 'start' }}>

                    {/* Left Column: Login */}
                    <div>
                        <div className="login-box mb-2" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--color-primary)' }}>
                            <h2 className="text-center mb-1">Acceso Intranet</h2>
                            <form action="#" onSubmit={(e) => { e.preventDefault(); alert('Esta es una demostración. No se puede iniciar sesión.'); }}>
                                <div className="form-group" style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="user" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Usuario / DNI</label>
                                    <input type="text" id="user" required style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </div>
                                <div className="form-group" style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="pass" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Contraseña</label>
                                    <input type="password" id="pass" required style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Ingresar</button>
                                <p className="text-center" style={{ marginTop: '1rem', fontSize: '0.9rem' }}><Link href="#" style={{ color: 'var(--color-primary)' }}>¿Olvidaste tu contraseña?</Link></p>
                            </form>
                        </div>

                        <div className="calendar-widget" style={{ background: 'white', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                            <div className="calendar-header" style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
                                Próximos Eventos
                            </div>
                            <div className="calendar-body" style={{ padding: '1rem' }}>
                                <div className="event-item" style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                                    <div className="event-date" style={{ fontWeight: 'bold', color: 'var(--color-secondary)', minWidth: '60px' }}>12 MAY</div>
                                    <div className="event-desc">Reunión de Padres - Nivel Primario</div>
                                </div>
                                <div className="event-item" style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                                    <div className="event-date" style={{ fontWeight: 'bold', color: 'var(--color-secondary)', minWidth: '60px' }}>25 MAY</div>
                                    <div className="event-desc">Acto Escolar - Revolución de Mayo</div>
                                </div>
                                <div className="event-item" style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0', borderBottom: 'none' }}>
                                    <div className="event-date" style={{ fontWeight: 'bold', color: 'var(--color-secondary)', minWidth: '60px' }}>05 JUN</div>
                                    <div className="event-desc">Jornada Pedagógica (Sin clases)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Blog/News */}
                    <div>
                        <h2 className="mb-2">Novedades Institucionales</h2>
                        <div className="blog-list" style={{ display: 'grid', gap: '2rem' }}>
                            <article className="blog-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="blog-thumb" style={{ width: '120px', height: '80px', backgroundColor: '#e0f2fe', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}></div>
                                <div className="blog-details">
                                    <div className="blog-meta" style={{ fontSize: '0.85rem', color: '#777' }}>Publicado el 15 de Abril, 2024</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}><Link href="#">Semana de la Lectura</Link></h3>
                                    <p>Exploramos nuevos mundos a través de los libros. Ver galería de fotos.</p>
                                </div>
                            </article>

                            <article className="blog-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="blog-thumb" style={{ width: '120px', height: '80px', backgroundColor: '#fce7f3', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}></div>
                                <div className="blog-details">
                                    <div className="blog-meta" style={{ fontSize: '0.85rem', color: '#777' }}>Publicado el 10 de Abril, 2024</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}><Link href="#">Colecta Solidaria de Otoño</Link></h3>
                                    <p>Gracias a todas las familias que colaboraron con alimentos no perecederos.</p>
                                </div>
                            </article>

                            <article className="blog-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="blog-thumb" style={{ width: '120px', height: '80px', backgroundColor: '#dcfce7', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}></div>
                                <div className="blog-details">
                                    <div className="blog-meta" style={{ fontSize: '0.85rem', color: '#777' }}>Publicado el 28 de Marzo, 2024</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}><Link href="#">Taller para Padres: Crianza Digital</Link></h3>
                                    <p>Consejos para acompañar a nuestros hijos en el uso responsable de la tecnología.</p>
                                </div>
                            </article>

                            <article className="blog-item" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div className="blog-thumb" style={{ width: '120px', height: '80px', backgroundColor: '#ffedd5', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}></div>
                                <div className="blog-details">
                                    <div className="blog-meta" style={{ fontSize: '0.85rem', color: '#777' }}>Publicado el 20 de Marzo, 2024</div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}><Link href="#">Inicio de Talleres Extracurriculares</Link></h3>
                                    <p>Ya están disponibles los horarios de deportes y arte.</p>
                                </div>
                            </article>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
