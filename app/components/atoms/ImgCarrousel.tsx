const ImgCarrousel = () => {
    return (
        <section className="mt-18 py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center">Campanhas de sucesso</h1>
                
                <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-8 pb-4">
                {renderImage("https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                {renderImage("https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80", "Vivamus lacinia odio vitae vestibulum.")}
                {renderImage("https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80", "Donec in efficitur leo.")}
                {renderImage("https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80", "Suspendisse non justo varius, scelerisque ligula eget, pellentesque elit.")}

                </div>
            </div>
        </section>
    );
}

const renderImage = (src: string, alt: string) => (
    <div className="relative group rounded-lg shadow-lg">
        <img src={src} alt={alt} className="rounded-lg object-cover object-center h-screen md:border md:border-gray-300 md:shadow-md" />
        <div className="hidden lg:block absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-red-500 font-bold justify-center">{alt}</span>
        </div>
        <div className="lg:hidden mt-2 text-center font-bold">{alt}</div>
    </div>
);

export default ImgCarrousel;
