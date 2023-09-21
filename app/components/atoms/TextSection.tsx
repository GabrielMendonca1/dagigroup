import ButtonText from "./ButtonText";

const TextSection = () => {
  return (
    <div className="flex flex-col z-10 items-center justify-center w-full h-full text-center space-y-8">
      <h2 className="text-4xl lg:text-5xl font-weight-{800} dark:text-white">Arcu suscipit massa aliquam proin amet</h2>
      <p className="text-sm lg:text-sm max-w-lg mx-auto dark:text-white">
        Luctus felis sit lectus tristique diam ornare bibendum. Arcu auctor suspendisse luctus amet bibendum pellentesque lorem. Malesuada lobortis tristique tortor.
      </p>
      <ButtonText />
    </div>
  );
};

export default TextSection;
