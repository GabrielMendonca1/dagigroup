import MainIMG from '../atoms/MainIMG'; 
import TextSection from '../atoms/TextSection'; 
// Desc: Hero section of the landing page
export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center h-screen">
      <MainIMG />
      <TextSection />
    </section>
  );
}