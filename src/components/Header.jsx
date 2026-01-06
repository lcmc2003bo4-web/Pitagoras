'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return pathname === path
            ? 'text-secondary font-semibold bg-secondary/5'
            : 'text-gray-600 hover:text-secondary hover:bg-gray-50';
    };

    const navItems = [
        { label: 'Inicio', path: '/' },
        { label: 'Nosotros', path: '/about' },
        { label: 'Académica', path: '/academics' },
        { label: 'Vida Estudiantil', path: '/student-life' },
        { label: 'Admisiones', path: '/admissions' },
        { label: 'Blog', path: '/blog' },
        { label: 'Comunidad', path: '/community' },
        { label: 'Contacto', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-glass border-b border-gray-100'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-heading font-bold text-primary tracking-tight">
                            Instituto<span className="text-secondary">Excelencia</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${isActive(item.path)}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a href="#" className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30">
                            Intranet
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Abrir menú</span>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                <div className="container py-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`block px-4 py-3 rounded-xl text-base font-medium ${isActive(item.path)}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-100 mt-2">
                        <a href="#" className="flex justify-center w-full px-4 py-3 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20">
                            Intranet
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
