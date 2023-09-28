const ImgCarrousel = () => {
    return (
      <section className="py-8 md:py-12 bg-white dark:bg-black flex flex-col md:flex-row">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className=" w-auto md:w-[400px] lg:w-[1200px] xl:w-[1200px] md:h-[492] flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80" 
              alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className="object-cover object-center w-[660px] h-[600px] md:border md:border-gray-300 md:shadow-md" 
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ImgCarrousel;
  