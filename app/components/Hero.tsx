import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center h-screen">
      {/* Imagem */}
      <div className="absolute w-full lg:w-1/2  h-full dark:invert">
        <Image
          src={'/dall1.jpg'}
          className="object-cover"
          alt="Dagi Logo"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Texto centralizado e sobreposto à imagem */}
      <div className="z-10 flex flex-col items-center justify-center w-full h-full text-center lg:text-left space-y-8 lg:mt-10 ">
        <ul>
          <li className="ml-0 lg:ml-14">
            <h2 className="text-8xl lg:text-9xl font-semibold text-black dark:text-white">Dream</h2>
          </li>
          <li className="ml-0 lg:ml-28">
            <h2 className="text-8xl lg:text-9xl font-semibold text-black dark:text-white">Act</h2>
          </li>
          <li className="ml-0 lg:ml-24">
            <h2 className="text-8xl lg:text-9xl font-semibold text-black dark:text-white">Get It!</h2>
          </li>
        </ul>
      </div>
  </section>
  );
}
