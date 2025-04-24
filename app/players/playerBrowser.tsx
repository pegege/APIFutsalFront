'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Player {
  _id: string;
  name: string;
  nickname: string;
  img?: string;
}

export default function PlayersBrowser() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/players`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch players");
        const data = await res.json();
        setPlayers(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching players:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-center text-gray-500">Cargando jugadores...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {players.map((player) => (
            <Link key={player._id} href={`/players/${player._id}`}>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer text-center">
                {player.img ? (
                  <img
                    src={player.img}
                    alt={player.nickname}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                )}
                <h2 className="text-lg font-semibold">{player.nickname}</h2>
                <p className="text-gray-500 text-sm">{player.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
