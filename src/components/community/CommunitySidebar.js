'use client';

import { useState } from 'react';
import Link from 'next/link';
import Toast from '@/components/ui/Toast';

export default function CommunitySidebar() {
    const [showToast, setShowToast] = useState(false);
    // Basic calendar state
    const [currentMonth, setCurrentMonth] = useState(new Date());
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
        <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Acceso Intranet</h2>
                <form action="#" onSubmit={(e) => { e.preventDefault(); setShowToast(true); }}>
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

            <Toast
                message="Acceso denegado. Esta es una demostración."
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />


            {/* Interactive Calendar Widget */}
            <div className="bg-white rounded-3xl shadow-soft-md border border-gray-100 overflow-hidden">
                <div className="bg-primary text-white p-6 flex flex-col items-center">
                    <div className="flex items-center justify-between w-full mb-4">
                        <button
                            onClick={() => {
                                const newDate = new Date(currentMonth);
                                newDate.setMonth(newDate.getMonth() - 1);
                                setCurrentMonth(newDate);
                                setSelectedDate(null);
                            }}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                        >
                            ◀
                        </button>
                        <h3 className="text-lg font-bold text-white capitalize">
                            {currentMonth.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button
                            onClick={() => {
                                const newDate = new Date(currentMonth);
                                newDate.setMonth(newDate.getMonth() + 1);
                                setCurrentMonth(newDate);
                                setSelectedDate(null);
                            }}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                        >
                            ▶
                        </button>
                    </div>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold text-gray-400">
                        <div>D</div><div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {/* Empty days padding */}
                        {[...Array(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay())].map((_, i) => <div key={`empty-${i}`}></div>)}

                        {/* Days */}
                        {[...Array(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate())].map((_, i) => {
                            const day = i + 1;
                            const isSelected = selectedDate === day;
                            // Mock checking event for current month only for simplicity in demo
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
                    <h4 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-4">
                        {selectedDate ? `Eventos del día ${selectedDate}` : 'Seleccione un día'}
                    </h4>
                    {selectedDate && getEventsForDay(selectedDate).length > 0 ? (
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
                        <p className="text-sm text-gray-400 italic">
                            {selectedDate ? 'No hay eventos programados.' : 'Haga clic en un día para ver detalles.'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
