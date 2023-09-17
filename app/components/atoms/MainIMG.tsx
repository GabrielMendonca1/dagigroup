import Image from 'next/image';

 const MainIMG = () => {
  return (
    <div className="absolute w-full lg:w-1/2 h-full dark:invert">
      <Image
        src={'/dall1.jpg'}
        className="object-cover"
        alt="Dagi Logo"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
);}
export default MainIMG;