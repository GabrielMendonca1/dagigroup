// MainIMG.tsx
const MainIMG = () => {
  return (
    <div className="absolute w-full h-full">
      <video
        className="object-cover w-full h-screen"
        autoPlay
        loop
        muted
        
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
export default MainIMG;
