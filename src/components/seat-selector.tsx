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
      <div className="flex flex-wrap">
        {Array.from({ length: 40 }, (_, i) => i + 1).map((seat) => (
          <div
            key={seat}
            className={`w-12 h-12 rounded-t-xl rounded-b-lg m-2 cursor-pointer ${
              selectedSeats.includes(seat) ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => handleSeatClick(seat)}>
            <div className="flex justify-end pr-2 items-center text-center text-black">
              {seat}
            </div>
          </div>
        ))}
      </div>
      <div className="text-2xl text-center mt-4">
        Selected Seats: {selectedSeats.join(', ')}
      </div>
    </div>
  );
};

export default SeatSelector;
