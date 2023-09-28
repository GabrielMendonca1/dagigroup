const HeroList = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center md:px-0 md:text-left">
        <ul className="space-y-16">
          <li className="flex items-center text-left space-x-4 p-2">
            <div className="text-2xl md:text-2xl">🛠️</div>
            <div className="w-[70%]">
              <h3 className="text-lg md:text-xl font-bold">Development</h3>
              <p  className="text-xs md:text-sm font-light">Porttitor tempor consequat tristique faucibus netus massa. Auctor nibh faucibus felis mauris vitae.</p>
            </div>
          </li>
          <li className="flex items-center text-left space-x-4 p-2">
            <div className="text-2xl md:text-2xl">📱</div>
            <div className="w-[70%]">
              <h3 className="text-lg md:text-xl font-bold">Responsive Design</h3>
              <p  className="text-xs md:text-sm font-light">Erat sed ut porta ultrices. Tincidunt vulputate justo, interdum imperdiet viverra in non, eu. In tortor odio in </p>
            </div>
          </li>
          <li className="flex items-center text-left space-x-4 p-2">
            <div className="text-2xl md:text-2xl">🎨</div>
            <div className="w-[70%]">
              <h3 className="text-lg md:text-lg font-bold">UI/UX Design</h3>
              <p  className="text-xs md:text-sm font-light">Massa donec vivamus ultrices nascetur velit egestas. Augue facilisis sed at mattis ac auctor a feugiat sed. </p>
            </div>
          </li>
          <li className="flex items-center text-left space-x-4 p-2">
            <div className="text-2xl md:text-2xl">🖥️</div>
            <div className="w-[70%]">
              <h3 className="text-lg md:text-xl font-bold">Backend</h3>
              <p  className="text-xs md:text-sm font-light">Tincidunt laoreet ultricies vulputate congue sagittis dignissim orci, sapien ridiculus. Magna tincidunt arcu a.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  
  export default HeroList;
  