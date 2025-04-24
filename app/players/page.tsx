import { Suspense } from 'react';
import MatchesBrowser from './playerBrowser';

export default function MatchesPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Jugadores</h1>
      <Suspense fallback={<p className="text-center">Cargando Jugadores...</p>}>
        <MatchesBrowser />
      </Suspense>
    </main>
  );
}
