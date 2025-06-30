import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import CurrentStats from './components/CurrentStats';
import WeeklyTrend from './components/WeeklyTrend';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CurrentStats />
      <WeeklyTrend />
      <About />
      <Footer />
    </main>
  );
}
