const HeroList = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center md:px-0 md:text-left">
        <ul className="space-y-16">
          <li className="flex items-center space-x-4">
            <div className="text-3xl md:text-4xl">🛠️</div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">Development</h3>
              <p className="text-sm md:text-base">Porttitor tempor consequat tristique faucibus netus massa. Auctor nibh faucibus felis mauris vitae.</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="text-3xl md:text-4xl">📱</div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">Responsive Design</h3>
              <p className="text-sm md:text-base">Erat sed ut porta ultrices. Tincidunt vulputate justo, interdum imperdiet viverra in non, eu. In tortor odio in </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="text-3xl md:text-4xl">🎨</div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">UI/UX Design</h3>
              <p className="text-sm md:text-base">Massa donec vivamus ultrices nascetur velit egestas. Augue facilisis sed at mattis ac auctor a feugiat sed. </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="text-3xl md:text-4xl">🖥️</div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">Backend</h3>
              <p className="text-sm md:text-base">Tincidunt laoreet ultricies vulputate congue sagittis dignissim orci, sapien ridiculus. Magna tincidunt arcu a.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  
  export default HeroList;
  