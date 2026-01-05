import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <h3 className="font-heading text-2xl font-bold mb-4 text-white">Instituto<span className="text-secondary">Excelencia</span></h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Formando líderes con valores para el futuro a través de una educación integral y tecnología de vanguardia.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white border-b-2 border-secondary inline-block pb-1">Contacto</h4>
                        <div className="space-y-3 text-gray-300 text-sm">
                            <p className="flex items-start">
                                <span className="mr-2 mt-1">📍</span>
                                <span>Av. Educación 1234, Ciudad</span>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">📞</span>
                                <span>+123 456 7890</span>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">✉️</span>
                                <span>info@institutoexcelencia.edu</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white border-b-2 border-secondary inline-block pb-1">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-secondary transition-colors duration-200">Nosotros</Link></li>
                            <li><Link href="/admissions" className="hover:text-secondary transition-colors duration-200">Admisiones</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary transition-colors duration-200">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white border-b-2 border-secondary inline-block pb-1">Comunidad</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/community" className="hover:text-secondary transition-colors duration-200">Plataforma Padres</Link></li>
                            <li><Link href="/community" className="hover:text-secondary transition-colors duration-200">Aula Virtual</Link></li>
                            <li><Link href="/news" className="hover:text-secondary transition-colors duration-200">Noticias</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 Instituto Educativo Excelencia. Todos los derechos reservados.
                    </p>
                    <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                        {/* Social placeholders */}
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
