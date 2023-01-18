const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl">Choose seats</h1>
      <div className="flex mt-2 mb-6">
        <div className="flex items-center pr-2">
          <div className="bg-gray-300 rounded-full h-5 w-5"></div>
          <div className="text-lg px-2 text-gray-300">Available</div>
        </div>
        <div className="flex items-center px-2">
          <div className="bg-yellow-500 rounded-full h-5 w-5"></div>
          <div className="text-lg px-2 text-gray-300">Reserved</div>
        </div>
        <div className="flex items-center px-2">
          <div className="bg-red-500 rounded-full h-5 w-5"></div>
          <div className="text-lg px-2 text-gray-300">Selected</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
