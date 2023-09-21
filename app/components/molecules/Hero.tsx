import MainIMG from '../atoms/MainIMG'; 
import TextSection from '../atoms/TextSection'; 

export default function Hero() {
  return (
    <section className="relative flex items-center h-screen">
      <MainIMG />
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <TextSection />
      </div>
    </section>
  );
}

