'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function WeeklyTrend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeeklyData() {
      try {
        const res = await fetch('https://87rsc7svn5.execute-api.us-east-1.amazonaws.com/prod/data?type=weekly');
        const json = await res.json();
        setData(
          json.map((item) => ({
            ...item,
            temperature:
              item.temperature != null ? (item.temperature * 9) / 5 + 32 : null,
          }))
        );
      } catch (err) {
        console.error('❌ Failed to fetch trend data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeeklyData();
  }, []);

  return (
    <section className="p-6 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          📈 Weekly Data
        </h2>
        {loading ? (
          <p className="text-green-900/80 text-center">Loading...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis
                dataKey="timestamp"
                tickFormatter={(ts) =>
                  new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    hour12: true,
                  }).format(new Date(ts))
                }
                tick={{ fill: '#065f46', fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: '#065f46', fontSize: 12 }}
                domain={['auto', 'auto']}
              />
              <Tooltip
                labelStyle={{ color: '#065f46' }}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '12px',
                }}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="#cce7c2" />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#22c55e"
                strokeWidth={2}
                name="🌡️ Temp (°F)"
              />
              <Line
                type="monotone"
                dataKey="humidity"
                stroke="#0ea5e9"
                strokeWidth={2}
                name="💧 Humidity (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}
