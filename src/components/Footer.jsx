import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h3>Instituto Excelencia</h3>
                        <p>Formando líderes con valores para el futuro.</p>
                    </div>
                    <div>
                        <h4>Contacto</h4>
                        <p>Av. Educación 1234, Ciudad</p>
                        <p>+123 456 7890</p>
                        <p>info@institutoexcelencia.edu</p>
                    </div>
                    <div>
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><Link href="/admissions">Admisiones</Link></li>
                            <li><Link href="/contact">Contacto</Link></li>
                            <li><Link href="/community">Plataforma</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center" style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <p>&copy; 2024 Instituto Educativo Excelencia. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
