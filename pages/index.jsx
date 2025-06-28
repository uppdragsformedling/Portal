// frontend/pages/index.jsx ← detta är din "home"-sida i Next.js

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Välkommen till Uppdragsförmedling!</h1>
      <p className="text-lg mb-8 max-w-xl">
        Förmedla uppdrag och hitta rätt företag. Vi kopplar ihop kunder och entreprenörer på ett enkelt och säkert sätt.
      </p>
      <div className="space-x-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow">Logga in</button>
        </Link>
        <Link href="/register">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow">Registrera</button>
        </Link>
      </div>
    </div>
  );
}
