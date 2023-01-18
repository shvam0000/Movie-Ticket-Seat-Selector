const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl">Choose seats</h1>
      <div className="flex mt-2 mb-6">
        <div className="flex items-center pr-2">
          <div className="bg-yellow-500 rounded-full h-5 w-5"></div>
          <div className="text-lg px-2 text-gray-300">Available</div>
        </div>
        <div className="flex items-center px-2">
          <div className="bg-gray-100 rounded-full h-5 w-5"></div>
          <div className="text-lg px-2 text-gray-300">Reserved</div>
        </div>
        <div className="flex items-center px-2">
          <div className="bg-red-500 rounded-full h-5 w-5"></div>
          <div className="text-lg px-2 text-gray-300">Selected</div>
        </div>
      </div>
      <div>
        <h1 className="uppercase text-gray-300 px-4 py-1 border-2 border-gray-400 rounded-3xl w-fit mx-auto bg-[#585CBA]">
          Screen
        </h1>
        <hr className="mt-4 mb-10" />
      </div>
    </div>
  );
};

export default Hero;
