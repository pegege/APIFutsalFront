'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Team {
  _id: string;
  name: string;
  logoLink: string;
  shortName: string;
  slug?: string;
  season?: number;
  players?: any[];
}

export default function TeamBrowser() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const seasonParam = searchParams.get("season");

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const season = seasonParam ? parseInt(seasonParam, 10) : undefined;

  const MIN_SEASON = 2005;
  const MAX_SEASON = 2025;
  const currentSeason = season ?? MAX_SEASON;

  const [teams, setTeams] = useState<Team[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      try {
        const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/teams`);
        url.searchParams.set("page", String(page));
        url.searchParams.set("limit", "50");
        if (season) url.searchParams.set("season", String(season));

        const res = await fetch(url.toString());
        const json = await res.json();
        setTeams(json.data);
        setTotalPages(json.totalPages);
      } catch (err) {
        console.error("❌ Error al cargar equipos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [page, season]);

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mb-6">
        {currentSeason < MAX_SEASON && (
          <Link href={`/teams?page=1&season=${currentSeason + 1}`} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg">←</Link>
        )}
        <span className="text-lg font-semibold">Temporada {currentSeason}</span>
        {currentSeason > MIN_SEASON && (
          <Link href={`/teams?page=1&season=${currentSeason - 1}`} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg">→</Link>
        )}
      </div>

      {loading ? (
        <p className="text-center">Cargando equipos...</p>
      ) : (
        <>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {teams.map((team) => (
              <li key={team._id} className="bg-white p-4 rounded shadow text-center">
                <Link href={`/teams/${team._id}`} className="block">
                  <img src={team.logoLink} alt={team.name} className="w-16 h-16 mx-auto mb-2" />
                  <div className="font-semibold text-gray-700">{team.name}</div>
                  <div className="text-gray-500 text-sm">Temporada {team.season}</div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-4">
            {page > 1 && (
              <Link href={`/teams?page=${page - 1}${season ? `&season=${season}` : ''}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                ← Anterior
              </Link>
            )}
            {page < totalPages && (
              <Link href={`/teams?page=${page + 1}${season ? `&season=${season}` : ''}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Siguiente →
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}
