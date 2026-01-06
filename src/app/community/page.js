import Link from 'next/link';
import CommunitySidebar from '@/components/community/CommunitySidebar';

export const metadata = {
    title: 'Comunidad Education | Instituto Educativo Excelencia',
    description: 'Acceso a intranet para padres y alumnos, calendario de eventos y novedades institucionales.',
};

export default function Community() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 text-center bg-background-alt">
                <div className="container">
                    <h1 className="mb-4">Espacio Comunidad</h1>
                    <p className="text-xl text-gray-600 font-medium">Noticias, eventos y acceso a la plataforma de gestión académica.</p>
                </div>
            </section>

            <section className="py-24 pb-32">
                <div className="container grid lg:grid-cols-3 gap-12 items-start">

                    {/* Left Column: Login & Calendar */}
                    <CommunitySidebar />

                    {/* Right Column: Blog/News */}
                    <div className="lg:col-span-2">
                        <h2 className="mb-8">Novedades Institucionales</h2>
                        <div className="space-y-8">
                            <article className="flex gap-6 items-start group">
                                <div className="w-32 h-24 bg-blue-100 rounded-2xl flex-shrink-0 overflow-hidden">
                                    {/* Placeholder Image */}
                                    <div className="w-full h-full bg-blue-200 group-hover:scale-110 transition-transform duration-500"></div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2">
                                        <span>📅 15 de Abril, 2024</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="text-secondary">Académico</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                                        <Link href="#">Semana de la Lectura: "Mundos Imaginarios"</Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Exploramos nuevos mundos a través de los libros. Nuestros alumnos de primaria presentaron sus propios cuentos ilustrados.
                                    </p>
                                </div>
                            </article>

                            <article className="flex gap-6 items-start group">
                                <div className="w-32 h-24 bg-purple-100 rounded-2xl flex-shrink-0 overflow-hidden">
                                    <div className="w-full h-full bg-purple-200 group-hover:scale-110 transition-transform duration-500"></div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2">
                                        <span>📅 10 de Abril, 2024</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="text-accent">Solidaridad</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                                        <Link href="#">Éxito en la Colecta Solidaria de Otoño</Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Gracias a todas las familias que colaboraron con alimentos no perecederos para el comedor comunitario "Los Pekes".
                                    </p>
                                </div>
                            </article>

                            <article className="flex gap-6 items-start group">
                                <div className="w-32 h-24 bg-green-100 rounded-2xl flex-shrink-0 overflow-hidden">
                                    <div className="w-full h-full bg-green-200 group-hover:scale-110 transition-transform duration-500"></div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2">
                                        <span>📅 28 de Marzo, 2024</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="text-green-600">Familias</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                                        <Link href="#">Taller para Padres: Crianza Digital Responsable</Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Consejos prácticos de expertos para acompañar a nuestros hijos en el uso saludable de la tecnología y redes sociales.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
