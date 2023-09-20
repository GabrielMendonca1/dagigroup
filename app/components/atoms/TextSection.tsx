const TextSection = () => {
  return (
     <div className="z-10 flex flex-col items-center justify-center w-full h-full text-center lg:text-left space-y-8 lg:mt-10 ">
      <ul>
        <li className="ml-0 lg:ml-14">
          <h2 className="text-7xl sm:text-7xl lg:text-9xl font-semibold text-black dark:text-white">Dream</h2>
        </li>
        <li className="ml-0 lg:ml-28">
          <h2 className="text-7xl sm:text-7xl lg:text-9xl font-semibold text-black dark:text-white">Act</h2>
        </li>
        <li className="ml-0 lg:ml-24">
          <h2 className="text-7xl sm:text-7xl lg:text-9xl font-semibold text-black dark:text-white">Get It!</h2>
        </li>
      </ul>
    </div>
);}
export default TextSection;