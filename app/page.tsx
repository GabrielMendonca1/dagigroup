import Header from './components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main> {/* Adicionado padding */}
      <Header />
      {/* Section para o logo */}
      <section className="flex flex-col items-center mt-32 mb-32">
        <div className="relative">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Dagi Logo"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </main>
  );
}

