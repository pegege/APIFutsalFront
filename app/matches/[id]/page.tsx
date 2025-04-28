import { notFound } from "next/navigation";
import { type FC } from "react";

interface Match {
  _id: string;
  homeTeam: { name: string, logoLink: string } | string;
  awayTeam: { name: string, logoLink: string } | string;
  score: string;
  season: number;
  startingPlayersHome: any[];
  startingPlayersAway: any[];
  substitutesAway: any[];
  substitutesHome: any[];
  notPlayedAway: any[];
  notPlayedHome: any[];
  events: any[];
}

const MatchPage: FC<any> = async ({ params }) => {
  if (!params?.id) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/matches/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const match: Match = await res.json();

  
  return (
    <main className="relative p-8 pt-4 pb-0">

    <div className="flex items-center justify-center space-x-9 mb-4 ml-30">
      {typeof match.homeTeam === "object" && typeof match.homeTeam.logoLink === "string" && (
        <img
          src={match.homeTeam.logoLink}
          alt={match.homeTeam.name}
          className="w-16 h-16"
        />
      )}

      <h1 className="text-2xl font-bold text-center flex items-center space-x-2">
        <span>{typeof match.homeTeam === "object" ? match.homeTeam.name : match.homeTeam}</span>
        <span className="text text-blue-600">{match.score}</span>
        <span>{typeof match.awayTeam === "object" ? match.awayTeam.name : match.awayTeam}</span>
      </h1>


      {typeof match.awayTeam === "object" && typeof match.awayTeam.logoLink === "string" && (
        <img
          src={match.awayTeam.logoLink}
          alt={match.awayTeam.name}
          className="w-16 h-16"
        />
      )}
    </div>

    <div className="absolute top-0 left-0 p-2 text-sm text-gray-500">
      Temporada {match.season}
    </div>

    <hr className="my-4 border-gray-300" />

      <ul className="list-none mb-4 grid grid-cols-2 ml-20">
        <li>
          <div className="bg-white shadow-md rounded-lg p-2">
            <h2 className="text-xl font-semibold mb-2 py-2">Cinco inicial</h2>
            <ul className="list-none list-inside mb-4 divide-y divide-gray-300">
              {match.startingPlayersHome.map((player: any, index: number) => {
                const playerEvents = match.events.filter(
                  (event: any) => event.player === player._id || event.playerId === player._id
                );

                return (
                  <li className="py-2" key={player?._id?.toString() || index}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{player?.nickname || player?.name || "Jugador desconocido"}</span>
                      <span className="text-sm text-gray-500">{player?.position || "?"}</span>
                    </div>

                    {playerEvents.length > 0 && (
                      <div className="flex items-center space-x-2 mt-1">
                        {playerEvents.map((event: any) => {
                          if (event.type === "goal") {
                            return (
                              <span key={event._id} className="text-black text-xs font-bold">
                                  <img
                                    key={event._id}
                                    src="/images/balon.png"
                                    alt="Goal"
                                    className="w-4 h-4 inline-block mr-1"
                                  /> 
                                  {event.minute}'
                              </span>
                            );
                          } else if (event.type === "yellow") {
                            return (
                              <span key={event._id} className="text-yellow-500 text-xs font-bold">
                                🟨 {event.minute}'
                              </span>
                            );
                          } else if (event.type === "redCard") {
                            return (
                              <span key={event._id} className="text-red-500 text-xs font-bold">
                                🟥 {event.minute}'
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <h2 className="text-xl font-semibold mb-2 py-2">Suplentes</h2>
            <ul className="list-none list-inside mb-4 divide-y divide-gray-300">
              {match.substitutesHome.map((player: any, index: number) => {
                const playerEvents = match.events.filter(
                  (event: any) => event.player === player._id || event.playerId === player._id
                );

                return (
                  <li className="py-2" key={player?._id?.toString() || index}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{player?.nickname || player?.name || "Jugador desconocido"}</span>
                      <span className="text-sm text-gray-500">{player?.position || "?"}</span>
                    </div>

                    {playerEvents.length > 0 && (
                      <div className="flex items-center space-x-2 mt-1">
                        {playerEvents.map((event: any) => {
                          if (event.type === "goal") {
                            return (
                              <span key={event._id} className="text-black text-xs font-bold">
                                  <img
                                    key={event._id}
                                    src="/images/balon.png"
                                    alt="Goal"
                                    className="w-4 h-4 inline-block mr-1"
                                  /> 
                                  {event.minute}'
                              </span>
                            );
                          } else if (event.type === "yellow") {
                            return (
                              <span key={event._id} className="text-yellow-500 text-xs font-bold">
                                🟨 {event.minute}'
                              </span>
                            );
                          } else if (event.type === "red") {
                            return (
                              <span key={event._id} className="text-red-500 text-xs font-bold">
                                🟥 {event.minute}'
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>

        <li>          
          <div className="bg-white shadow-md rounded-lg p-2">
            <h2 className="text-xl font-semibold mb-2 py-2">Cinco inicial</h2>
            <ul className="list-none list-inside mb-4 divide-y divide-gray-300">
              {match.startingPlayersAway.map((player: any, index: number) => {
                const playerEvents = match.events.filter(
                  (event: any) => event.player === player._id || event.playerId === player._id
                );

                return (
                  <li className="py-2" key={player?._id?.toString() || index}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{player?.nickname || player?.name || "Jugador desconocido"}</span>
                      <span className="text-sm text-gray-500">{player?.position || "?"}</span>
                    </div>

                    {playerEvents.length > 0 && (
                      <div className="flex items-center space-x-2 mt-1">
                        {playerEvents.map((event: any) => {
                          if (event.type === "goal") {
                            return (
                              <span key={event._id} className="text-black text-xs font-bold">
                                  <img
                                    key={event._id}
                                    src="/images/balon.png"
                                    alt="Goal"
                                    className="w-4 h-4 inline-block mr-1"
                                  /> 
                                  {event.minute}'
                              </span>
                            );
                          } else if (event.type === "yellow") {
                            return (
                              <span key={event._id} className="text-yellow-500 text-xs font-bold">
                                🟨 {event.minute}'
                              </span>
                            );
                          } else if (event.type === "red") {
                            return (
                              <span key={event._id} className="text-red-500 text-xs font-bold">
                                🟥 {event.minute}'
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <h2 className="text-xl font-semibold mb-2 py-2">Suplentes</h2>
            <ul className="list-none list-inside mb-4 divide-y divide-gray-300">
              {match.substitutesAway.map((player: any, index: number) => {
                const playerEvents = match.events.filter(
                  (event: any) => event.player === player._id || event.playerId === player._id
                );

                return (
                  <li className="py-2" key={player?._id?.toString() || index}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{player?.nickname || player?.name || "Jugador desconocido"}</span>
                      <span className="text-sm text-gray-500">{player?.position || "?"}</span>
                    </div>

                    {playerEvents.length > 0 && (
                      <div className="flex items-center space-x-2 mt-1">
                        {playerEvents.map((event: any) => {
                          if (event.type === "goal") {
                            return (
                              <span key={event._id} className="text-black text-xs font-bold">
                                  <img
                                    key={event._id}
                                    src="/images/balon.png"
                                    alt="Goal"
                                    className="w-4 h-4 inline-block mr-1"
                                  /> 
                                  {event.minute}'
                              </span>
                            );
                          } else if (event.type === "yellow") {
                            return (
                              <span key={event._id} className="text-yellow-500 text-xs font-bold">
                                🟨 {event.minute}'
                              </span>
                            );
                          } else if (event.type === "red") {
                            return (
                              <span key={event._id} className="text-red-500 text-xs font-bold">
                                🟥 {event.minute}'
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default MatchPage;
