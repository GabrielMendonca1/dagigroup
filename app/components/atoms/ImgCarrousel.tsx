const ImgCarrousel = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Campanhas de sucesso</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <img src="/path/to/image1.jpg" alt="Imagem 1" className="rounded-lg shadow-lg object-cover object-center h-screen" />
                    <img src="/path/to/image2.jpg" alt="Imagem 2" className="rounded-lg shadow-lg object-cover object-center h-screen" />
                    <img src="/path/to/image3.jpg" alt="Imagem 3" className="rounded-lg shadow-lg object-cover object-center h-screen" />
                    <img src="/path/to/image4.jpg" alt="Imagem 4" className="rounded-lg shadow-lg object-cover object-center h-screen" />
                    {/* Adicione mais imagens conforme necessário */}
                </div>
            </div>
        </section>
    );
}

export default ImgCarrousel;
