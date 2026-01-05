'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Community() {
    // Basic calendar state (mocked)
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());

    // Mock events
    const events = [
        { day: 12, title: "Reunión de Padres", time: "18:00 Hs", type: "reunion" },
        { day: 15, title: "Feria de Ciencias", time: "09:00 Hs", type: "evento" },
        { day: 25, title: "Acto Revolución de Mayo", time: "10:00 Hs", type: "acto" },
    ];

    const getEventsForDay = (day) => events.filter(e => e.day === day);
    const hasEvent = (day) => events.some(e => e.day === day);

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

                    {/* Left Column: Login */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-soft-md border border-gray-100">
                            <h2 className="text-2xl font-bold mb-6 text-center">Acceso Intranet</h2>
                            <form action="#" onSubmit={(e) => { e.preventDefault(); alert('Esta es una demostración. No se puede iniciar sesión.'); }}>
                                <div className="mb-4">
                                    <label htmlFor="user" className="block mb-2 font-medium text-gray-700">Usuario / DNI</label>
                                    <input type="text" id="user" required className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="pass" className="block mb-2 font-medium text-gray-700">Contraseña</label>
                                    <input type="password" id="pass" required className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                                </div>
                                <button type="submit" className="btn btn-primary w-full py-3">Ingresar</button>
                                <p className="text-center mt-4 text-sm">
                                    <Link href="#" className="text-secondary hover:underline">¿Olvidaste tu contraseña?</Link>
                                </p>
                            </form>
                        </div>

                        {/* Interactive Calendar Widget */}
                        <div className="bg-white rounded-3xl shadow-soft-md border border-gray-100 overflow-hidden">
                            <div className="bg-primary text-white p-6 text-center">
                                <h3 className="text-lg font-bold">Mayo 2024</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold text-gray-400">
                                    <div>D</div><div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div>
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {/* Empty days padding */}
                                    {[...Array(3)].map((_, i) => <div key={`empty-${i}`}></div>)}

                                    {/* Days */}
                                    {[...Array(31)].map((_, i) => {
                                        const day = i + 1;
                                        const isSelected = selectedDate === day;
                                        const isEvent = hasEvent(day);
                                        return (
                                            <button
                                                key={day}
                                                onClick={() => setSelectedDate(day)}
                                                className={`
                                                    h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all
                                                    ${isSelected ? 'bg-secondary text-white shadow-lg scale-110' : 'hover:bg-gray-50 text-gray-700'}
                                                    ${isEvent && !isSelected ? 'font-bold text-secondary bg-secondary/10' : ''}
                                                `}
                                            >
                                                {day}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Selected Date Events */}
                            <div className="border-t border-gray-100 p-6 bg-gray-50">
                                <h4 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-4">Eventos del día {selectedDate}</h4>
                                {getEventsForDay(selectedDate).length > 0 ? (
                                    <div className="space-y-3">
                                        {getEventsForDay(selectedDate).map((evt, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                                <div className="w-2 h-2 mt-2 rounded-full bg-secondary"></div>
                                                <div>
                                                    <p className="font-bold text-primary text-sm">{evt.title}</p>
                                                    <p className="text-xs text-gray-500">{evt.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-400 italic">No hay eventos programados.</p>
                                )}
                            </div>
                        </div>
                    </div>

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
