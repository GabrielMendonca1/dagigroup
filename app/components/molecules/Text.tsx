import ButtonText from "../atoms/ButtonText";

export default function Text() {
    return (
      <section className="flex flex-col items-center mt-28 mb-28">
        <div className="pt-6 pb-6 flex flex-col items-center w-full md:w-2/3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center">Título Centralizado</h1>
          <p className="text-center mt-2 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst. Sed ultrices placerat metus. Integer commodo commodo feugiat.
          </p>
          <p className="text-center text-base md:text-lg mt-4 md:mt-6">
            Etiam euismod erat et turpisasuscipit, quis auctor ligula interdum. Ut at dictum elit, non suscipit tellus. Mauris sit amet pellentesque dolor, nec hendrerit lacus. Mauris sed fermentum nulla.
          </p> 
        </div>
        <ButtonText />
      </section>
    )
}
