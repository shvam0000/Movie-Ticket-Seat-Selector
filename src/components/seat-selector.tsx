import { useState } from 'react';

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState<any>([]);

  const handleSeatClick = (seat: any) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s: any) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center">
        {Array.from({ length: 20 * 20 }, (_, i) => i + 1).map((seat) => (
          <div
            key={seat}
            className={`w-12 h-12 rounded-t-xl rounded-b-lg m-2 cursor-pointer flex-shrink-0 flex-grow-0 ${
              selectedSeats.includes(seat) ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => handleSeatClick(seat)}>
            <span className="flex justify-end pr-2 items-center text-center text-black">
              {seat}
            </span>
          </div>
        ))}
      </div>
      <div>
        <hr className="mt-10 mb-4" />
        <h1 className="uppercase text-gray-300 px-4 py-1 border-2 border-gray-400 rounded-3xl w-fit mx-auto bg-[#585CBA]">
          Screen
        </h1>
      </div>
      <div className="text-2xl text-center mt-4">
        Selected Seats: {selectedSeats.join(', ')}
      </div>
      <div className="text-2xl text-center mt-4">
        Total Bill: ₹{selectedSeats.length * 100}
      </div>
    </div>
  );
};

export default SeatSelector;
