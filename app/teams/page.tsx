import { Suspense } from 'react';
import TeamsBrowser from './teamBrowser';

export default function TeamsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Equipos</h1>
      <Suspense fallback={<p className="text-center">Cargando equipos...</p>}>
        <TeamsBrowser />
      </Suspense>
    </main>
  );
}
