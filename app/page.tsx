import Header from './components/Header';
import Hero from './components/Hero';
import TextHero from './components/TextHero';
import Footer from './components/Footer';
import ImgHero from './components/ImgHero';
import ListaHero from './components/ListaHero';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <TextHero />
      <ImgHero />
      <ListaHero />
      <Footer />
    </main>
  );
}
