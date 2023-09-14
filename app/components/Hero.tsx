import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex items-center mt-12px h-600px">
      
      {/* Logo à direita */}
      <div className="right-0 w-1/2 h-1/2 overflow-hidden">
        <Image
          src={'/dall1.png'}
          className="object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          alt="Dagi Logo"
          layout="responsive"
          width={800}
          height={600}
          priority
        />
      </div>
      
      {/* Lista overlaid on image */}
      <div className="z-10 flex flex-col space-y-4 absolute inset-x-0 m-auto left-2/4">
        <h2 className="text-9xl font-semibold text-black dark:text-white mb-6">Dream</h2>
        <h2 className="text-9xl font-semibold text-black dark:text-white mb-6 ml-12">Act</h2>
        <h2 className="text-9xl font-semibold text-black dark:text-white ml-24">Get It!</h2>
      </div>
    </section>
  );
}
