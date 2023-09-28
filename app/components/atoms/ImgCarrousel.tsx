const ImgCarrousel = () => {
  return (
    <section className="py-4 md:py-8 bg-white dark:bg-black flex items-center justify-center">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg px-4 py-4">
        <img 
          src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80" 
          alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="w-full h-auto object-cover object-center rounded shadow-md" 
        />
      </div>
    </section>
  );
};

export default ImgCarrousel;
