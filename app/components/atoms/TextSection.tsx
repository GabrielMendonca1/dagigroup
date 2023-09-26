import ButtonText from "./ButtonText";

const TextSection = () => {
  return (
    <div className="pb-12 lg:p-4 lg:pb-8 flex flex-col items-center lg:justify-center justify-end w-full h-screen lg:text-center sm:text-left space-y-8 mt-auto">
      <h2 className="text-3xl lg:text-6xl font-bold text-center dark:text-white">Exemplo exemplo exemplo</h2>
      <p className="text-sm lg:text-sm max-w-lg mx-auto text-center md:text-center lg:text-center dark:text-white">
        Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.
      </p>
      <ButtonText />
    </div>
  );
};

export default TextSection;
