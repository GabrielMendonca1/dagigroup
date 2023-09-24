export default function Text() {
  return (
    <section className="flex flex-col items-center mt-28 mb-28">
      <div className="pt-6 pb-6 flex flex-col items-center w-full md:w-2/3 px-4 sm:px-8 lg:px-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-6 sm:mb-4 lg:mb-8 text-center">Título do Vídeo teste teste teste </h1>
        <p className="text-center text-base font-light md:text-lg sm:mb-8 lg:mb-10 mb-4">
          Esta é a legenda do vídeo. Explica o que o vídeo é sobre.
        </p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  )
}
