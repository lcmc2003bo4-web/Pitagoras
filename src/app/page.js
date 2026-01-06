import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background-alt pt-32 pb-20">
                {/* Background Decor - Gradient Orbs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl"></div>
                </div>

                <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-sm tracking-wide uppercase">
                            Excelencia Académica
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary leading-tight">
                            Formando líderes con <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">valores</span> y visión.
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                            Una propuesta educativa integral que combina innovación tecnológica con una sólida formación humana para el futuro de tus hijos.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/admissions" className="btn btn-primary">
                                Iniciar Admisión
                            </Link>
                            <Link href="/about" className="btn btn-secondary">
                                Conócenos
                            </Link>
                        </div>
                    </div>

                    <div className="relative mt-8 lg:mt-0">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-500">
                            {/* Placeholder for Hero Image - In production use next/image */}
                            <img src="/assets/images/hero.png" alt="Estudiantes en laboratorio modernas" className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 text-white p-6 glass-panel rounded-2xl">
                                <p className="font-heading font-bold text-xl mb-1">Innovación Educativa</p>
                                <p className="text-sm text-white/90">Espacios diseñados para potenciar la creatividad.</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-2 border-secondary/20 rounded-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Quick Access Section - Bento Grid Style */}
            <section className="py-24 bg-white relative">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="mb-4">Experiencia Educativa</h2>
                        <p className="text-gray-500 text-lg">Acceso rápido a los pilares de nuestra comunidad educativa.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/admissions" className="group card p-8 hover:border-secondary/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                    📝
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">Admisiones</h3>
                                <p className="text-gray-500">Proceso de inscripción simplificado para nuevas familias. Únete a nuestra comunidad.</p>
                            </div>
                        </Link>

                        <Link href="/community" className="group card p-8 hover:border-accent/30 relative overflow-hidden md:col-span-2 bg-primary text-white">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
                                <div className="flex-1">
                                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 text-white">
                                        💻
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Plataforma Digital</h3>
                                    <p className="text-white/80">Acceso integral para padres y alumnos. Calificaciones, recursos y comunicación en un solo lugar.</p>
                                </div>
                                <div className="hidden md:block w-1/3 bg-white/10 rounded-xl h-32 backdrop-blur-sm border border-white/10 p-4">
                                    {/* Mockup visual */}
                                    <div className="w-full h-full bg-white/5 rounded flex items-center justify-center text-xs text-white/50">Interface Preview</div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/academics" className="group card p-8 hover:border-secondary/30 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    🌱
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Niveles</h3>
                                <p className="text-gray-500">Desde nivel inicial hasta secundaria, una trayectoria contínua de excelencia.</p>
                            </div>
                        </Link>

                        <Link href="/contact" className="group card p-8 hover:border-secondary/30 relative overflow-hidden md:col-span-2">
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-indigo-600">
                                        📞
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Contacto Directo</h3>
                                    <p className="text-gray-500 max-w-md">Estamos listos para atender tus consultas y coordinar visitas al campus.</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all">
                                        ➔
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured News Section */}
            <section className="py-24 bg-background-alt overflow-hidden">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Actualidad</span>
                            <h2>Noticias Destacadas</h2>
                        </div>
                        <Link href="/blog" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                            Ver todas las noticias <span className="ml-2">→</span>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map((post) => {
                            // Define color classes based on category for visual distinction
                            let categoryColorClass = "bg-blue-50 text-blue-600";
                            if (post.category === 'Infraestructura') categoryColorClass = "bg-purple-50 text-purple-600";
                            if (post.category === 'Admisiones') categoryColorClass = "bg-orange-50 text-orange-600";

                            return (
                                <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 group flex flex-col h-full">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        {/* In production, replace with Next/Image using post.image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                                            {post.image ? <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> : 'IMG'}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColorClass}`}>{post.category}</span>
                                            <span className="text-gray-400 text-xs">{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">{post.excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary mt-auto">
                                            Leer noticia completa
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
