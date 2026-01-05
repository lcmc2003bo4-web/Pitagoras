
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
            <section className="pb-24 pt-12">
                <div className="container grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* Info Column */}
                    <div>
                        <div className="bg-background-alt p-12 rounded-3xl h-full shadow-soft-sm border border-gray-100">
                            <div className="mb-8 flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-primary group-hover:scale-110 transition-transform">📍</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Dirección</h3>
                                    <p className="text-gray-600">Av. Educación 1234, Ciudad de Buenos Aires, Argentina</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-primary group-hover:scale-110 transition-transform">📞</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
                                    <p className="text-gray-600"><strong>Administración:</strong> +54 11 1234 5678</p>
                                    <p className="text-gray-600"><strong>Secretaría:</strong> +54 11 8765 4321</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm text-primary group-hover:scale-110 transition-transform">✉️</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Email y Mensajería</h3>
                                    <p className="text-gray-600">info@institutoexcelencia.edu</p>
                                    <p className="text-gray-600">WhatsApp: +54 9 11 1122 3344</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-12">
                                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg shadow-sm text-primary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1" title="Facebook">f</a>
                                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg shadow-sm text-primary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1" title="Instagram">ig</a>
                                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg shadow-sm text-primary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1" title="LinkedIn">in</a>
                                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg shadow-sm text-primary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1" title="YouTube">yt</a>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div>
                        <div className="h-full min-h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-soft-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016383375806!2d-58.38375908477038!3d-34.60373888045938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                                width="100%" height="100%" className="w-full h-full border-0" allowFullScreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
