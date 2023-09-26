const ButtonText = () => {
  return (
    <div className="flex flex-col items-center mt-16 justify-center">
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <button className=" px-8 py-4 text-lg font-semibold text-white  transition duration-500 ease-in-out transform bg-black hover:bg-blue-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 dark:text-black dark:bg-white">Conheça mais. </button>
      </a>
    </div>
  );
};

export default ButtonText;
