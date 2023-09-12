import Header from './components/Header';
import Hero from './components/Hero';
import TextHero from './components/TextHero';


export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <TextHero />
    </main>
  );
}
