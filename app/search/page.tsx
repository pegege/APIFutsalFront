"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Player {
  _id: string;
  nickname: string;
  name: string;
}

interface Team {
  _id: string;
  name: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setPlayers([]);
      setTeams([]);
      return;
    }

    const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(`https://fantasyfutsal.onrender.com/api/search?q=${query}`);
          const data = await res.json();
      
          setPlayers(data.players);
          setTeams(data.teams);
        } catch (error) {
          console.error("Error searching:", error);
        } finally {
          setLoading(false);
        }
      };
      

    fetchData();
  }, [query]);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Buscar jugadores o equipos</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por nombre..."
        className="w-full p-3 border rounded mb-6"
      />

      {loading && <p className="text-gray-500 mb-4">Buscando...</p>}

      {!loading && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">Jugadores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {players.length > 0 ? (
              players.map((player) => (
                <Link key={player._id} href={`/players/${player._id}`}>
                  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
                    <h3 className="font-semibold">{player.nickname}</h3>
                    <p className="text-gray-500 text-sm">{player.name}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400">No se encontraron jugadores</p>
            )}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-2">Equipos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teams.length > 0 ? (
              teams.map((team) => (
                <Link key={team._id} href={`/teams/${team._id}`}>
                  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
                    <h3 className="font-semibold">{team.name}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400">No se encontraron equipos</p>
            )}
          </div>
        </>
      )}
    </main>
  );
}
