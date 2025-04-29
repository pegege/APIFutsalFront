"use client";

import Link from "next/link";

export default function DocumentationPage() {
    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Documentación de la API</h1>

            <div className="space-y-12">

                {/* Partidos */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Partidos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ApiCard
                            title="Partido por ID"
                            url="https://fantasyfutsal.onrender.com/api/matches/680cea15f7b34ec46882a541"
                        />
                        <ApiCard
                            title="Partidos de un equipo"
                            url="https://fantasyfutsal.onrender.com/api/matches/team/Jaén Paraíso Interior"
                        />
                        <ApiCard
                            title="Partidos de una temporada"
                            url="https://fantasyfutsal.onrender.com/api/matches?page=1&limit=50&season=2025"
                        />
                        <ApiCard
                            title="Partidos de un equipo de una temporada"
                            url="https://fantasyfutsal.onrender.com/api/matches/team/Jaén Paraíso Interior?page=1&limit=50&season=2025"
                        />
                    </div>
                </section>

                {/* Eventos */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Eventos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ApiCard
                            title="Eventos por ID de partido"
                            url="https://fantasyfutsal.onrender.com/api/event/680cea15f7b34ec46882a541"
                        />
                    </div>
                </section>

                {/* Equipos */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Equipos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ApiCard
                            title="Equipos por ID"
                            url="https://fantasyfutsal.onrender.com/api/teams/680ce4fcf7b34ec468829090"
                        />
                        <ApiCard
                            title="Jugadores de un equipo por ID"
                            url="https://fantasyfutsal.onrender.com/api/teams/680ce4fcf7b34ec468829090/players"
                        />
                    </div>
                </section>

                {/* Jugadores */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Jugadores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ApiCard
                            title="Jugador por ID"
                            url="https://fantasyfutsal.onrender.com/api/players/680ce5d24a0e745817b26f6e"
                        />
                        <ApiCard
                            title="Jugadores por equipo"
                            url="https://fantasyfutsal.onrender.com/api/players/team/680ce4fcf7b34ec468829090"
                        />
                    </div>
                </section>

            </div>
        </main>
    )
}

// Componente reutilizable para un endpoint
function ApiCard({ title, url }: { title: string; url: string }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <Link href={url} target="_blank" className="text-blue-600 hover:underline break-all">
                {url}
            </Link>
        </div>
    );
}
