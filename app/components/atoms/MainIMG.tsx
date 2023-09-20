import Image from 'next/image';

 const MainIMG = () => {
  return (
    <div className="absolute w-full lg:w-1/2 h-full dark:invert">
      <Image
        src={'/dall1.jpg'}
        className="object-cover w-auto h-auto"
        alt="Dagi Logo"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
      />
    </div>
);}
export default MainIMG;