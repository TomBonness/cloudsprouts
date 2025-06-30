'use client';

export default function Hero() {
  return (
    <div className="w-full h-[30vh] flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 max-w-2xl mx-auto text-center shadow-xl border border-white/30">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 drop-shadow mb-4">
          🌱 CloudSprouts
        </h1>
        <p className="text-green-800 text-lg md:text-xl leading-relaxed drop-shadow-sm">
          Real-time insights from my garden. 
        </p>
      </div>
    </div>
  );
}
