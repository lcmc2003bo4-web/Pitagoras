import { blogPosts } from '@/data/blog-posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            {/* Header / Hero */}
            <div className="relative h-[400px] w-full overflow-hidden mb-16">
                <div className="absolute inset-0 bg-primary/20 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10"></div>
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    {post.image ?
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        : <span className="text-4xl">Featured Image ID: {post.id}</span>
                    }
                </div>

                <div className="absolute bottom-0 left-0 w-full z-20 container pb-12">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors">
                            ← Volver al Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wide">
                                {post.category}
                            </span>
                            <span className="text-white/80 text-sm font-medium">{post.date}</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                        <p className="text-white/90 text-lg max-w-2xl">
                            Por <span className="font-semibold">{post.author}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-a:text-secondary max-w-none">
                        <div className="text-xl leading-relaxed text-gray-600 font-medium mb-8 border-l-4 border-secondary pl-6 italic">
                            {post.excerpt}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    {/* Share / Tags Footer */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                        <div className="text-gray-500 text-sm">
                            Etiquetas: <span className="text-secondary font-medium">{post.category}, Educación, Instituto Excelencia</span>
                        </div>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-secondary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-secondary hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
