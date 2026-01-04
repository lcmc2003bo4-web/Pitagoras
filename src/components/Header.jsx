'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => pathname === path ? 'active' : '';

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        Instituto Excelencia
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link href="/" className={isActive('/')}>Inicio</Link></li>
                        <li><Link href="/about" className={isActive('/about')}>Nosotros</Link></li>
                        <li><Link href="/academics" className={isActive('/academics')}>Académica</Link></li>
                        <li><Link href="/student-life" className={isActive('/student-life')}>Vida Estudiantil</Link></li>
                        <li><Link href="/admissions" className={isActive('/admissions')}>Admisiones</Link></li>
                        <li><Link href="/community" className={isActive('/community')}>Comunidad</Link></li>
                        <li><Link href="/contact" className={isActive('/contact')}>Contacto</Link></li>
                        <li><a href="#" className="btn btn-sm btn-primary">Intranet</a></li>
                    </ul>
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        ☰
                    </button>
                </nav>
            </div>
        </header>
    );
}
