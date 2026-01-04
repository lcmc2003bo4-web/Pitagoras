
export default function Contact() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header section-padding text-center">
                <div className="container">
                    <h1>Contacto</h1>
                    <p>Estamos aquí para responder tus consultas.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding" style={{ paddingTop: 0 }}>
                <div className="container grid-2-col" style={{ alignItems: 'stretch' }}>

                    {/* Info Column */}
                    <div>
                        <div className="contact-info-box" style={{ background: 'var(--color-bg-light)', padding: '3rem', borderRadius: 'var(--radius-md)', height: '100%' }}>
                            <div className="contact-item" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flexStart', gap: '1rem' }}>
                                <div className="contact-icon" style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📍</div>
                                <div>
                                    <h3>Dirección</h3>
                                    <p>Av. Educación 1234, Ciudad de Buenos Aires, Argentina</p>
                                </div>
                            </div>
                            <div className="contact-item" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flexStart', gap: '1rem' }}>
                                <div className="contact-icon" style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>📞</div>
                                <div>
                                    <h3>Teléfonos</h3>
                                    <p><strong>Administración:</strong> +54 11 1234 5678</p>
                                    <p><strong>Secretaría:</strong> +54 11 8765 4321</p>
                                </div>
                            </div>
                            <div className="contact-item" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flexStart', gap: '1rem' }}>
                                <div className="contact-icon" style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>✉️</div>
                                <div>
                                    <h3>Email y Mensajería</h3>
                                    <p>info@institutoexcelencia.edu</p>
                                    <p>WhatsApp: +54 9 11 1122 3344</p>
                                </div>
                            </div>

                            <div className="social-links-lg" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                                <a href="#" className="social-btn" title="Facebook" style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', color: 'var(--color-primary)' }}>f</a>
                                <a href="#" className="social-btn" title="Instagram" style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', color: 'var(--color-primary)' }}>ig</a>
                                <a href="#" className="social-btn" title="LinkedIn" style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', color: 'var(--color-primary)' }}>in</a>
                                <a href="#" className="social-btn" title="YouTube" style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.3s ease', color: 'var(--color-primary)' }}>yt</a>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div>
                        <div className="map-container" style={{ height: '400px', background: '#eee', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016383375806!2d-58.38375908477038!3d-34.60373888045938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
