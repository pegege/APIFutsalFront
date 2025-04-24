import { Suspense } from 'react';
import MatchesBrowser from './matchBrowser';

export default function MatchesPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Partidos</h1>
      <Suspense fallback={<p className="text-center">Cargando partidos...</p>}>
        <MatchesBrowser />
      </Suspense>
    </main>
  );
}
