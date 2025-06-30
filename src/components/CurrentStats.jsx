'use client';

import { useEffect, useState } from 'react';

export default function CurrentReading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://87rsc7svn5.execute-api.us-east-1.amazonaws.com/prod/data');
        const json = await res.json();
        setData(json.payload);
      } catch (err) {
        console.error('❌ Failed to fetch current reading:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="flex items-center justify-center p-6">
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Current Readings</h2>
        {loading ? (
          <p className="text-green-900/80">Loading...</p>
        ) : data ? (
          <div className="space-y-2">
            <p className="text-lg text-green-900">
              🌡️ Temp: <span className="font-semibold">{data.temperature}°C</span>
            </p>
            <p className="text-lg text-green-900">
              💧 Humidity: <span className="font-semibold">{data.humidity}%</span>
            </p>
            <p className="text-sm text-green-700/70 italic">Updated: {new Date(data.timestamp).toLocaleString()}</p>
          </div>
        ) : (
          <p className="text-red-600">No data available</p>
        )}
      </div>
    </section>
  );
}
