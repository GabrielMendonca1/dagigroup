import ImgCarrousel from "../atoms/ImgCarrousel";
import HeroList from "../atoms/HeroList";


export default function ImgGroup() {
    return (
      <section className="flex flex-col items-center w-full mt-28 mb-28">
        <div className="text-center mb-8 w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 lg:mb-6">Título do Vídeo teste teste teste</h1>
          <p className="text-base font-light md:text-lg lg:mb-4">
            Esta é a legenda do vídeo. Explica o que o vídeo é sobre.
          </p>
        </div>
  
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-1/2">
   
            <ImgCarrousel />
          </div>
          <div className="w-full md:w-1/2 justify-center">
            <HeroList />
          </div>
        </div>
      </section>
    );   
  }
  