import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';

export const metadata = {
    title: 'Blog Institucional | Instituto Educativo Excelencia',
    description: 'Novedades, eventos y artículos de interés para nuestra comunidad educativa.',
};

export default function BlogPage() {
    return (
        <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Nuestro Blog</span>
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Novedades y Actualidad</h1>
                    <p className="text-gray-600 text-lg">Mantente informado sobre los logros, eventos y noticias más importantes de nuestra comunidad educativa.</p>
                </div>

                {/* Search / Filter Placeholder */}
                <div className="max-w-xl mx-auto mb-16 relative">
                    <input
                        type="text"
                        placeholder="Buscar artículos..."
                        className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-soft-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all font-sans"
                    />
                    <button className="absolute right-2 top-2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* Grid of Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => {
                        // Define color classes based on category for visual distinction
                        let categoryColorClass = "bg-blue-50 text-blue-600";
                        if (post.category === 'Infraestructura') categoryColorClass = "bg-purple-50 text-purple-600";
                        if (post.category === 'Admisiones') categoryColorClass = "bg-orange-50 text-orange-600";
                        if (post.category === 'Vida Estudiantil') categoryColorClass = "bg-green-50 text-green-600";

                        return (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                                <article className="bg-white rounded-3xl overflow-hidden shadow-soft-sm group-hover:shadow-soft-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group-hover:border-secondary/20 group-hover:-translate-y-1">
                                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:scale-105 transition-transform duration-700">
                                            {post.image ? <Image src={post.image} alt={post.title} fill className="object-cover" /> : 'IMG'}
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-white/90 ${categoryColorClass.replace('bg-', 'text-')}`}>
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs font-medium uppercase tracking-wide">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.author}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-secondary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                            Leer artículo <span className="ml-2">→</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
