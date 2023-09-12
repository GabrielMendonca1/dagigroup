import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-row mt-12px ">
      {/* Logo à esquerda */}
      <div className="flex-2 relative">
        <Image
          src={'/moon.jpg'}
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          alt="Dagi Logo"
          width={800}
          height={300}
          objectFit="cover"
          priority
        />
      </div>
      {/* Lista à direita */}
      <div className="flex-1 flex flex-col justify-center items-start pr-24 space-y-4">
        <h2 className="text-8xl font-semibold mb-6">Dream</h2>
        <h2 className="text-8xl font-semibold mb-6">Act</h2>
        <h2 className="text-8xl font-semibold">Get It!</h2>
      </div>
    </section>
  );
}
