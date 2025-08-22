
import React from 'react';

interface InsideOfCardProps {
  onFlip: () => void;
  recipientName: string;
}

export const InsideOfCard: React.FC<InsideOfCardProps> = ({ onFlip, recipientName }) => {
  return (
    <div className="w-full h-full rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
      <div className="overflow-y-auto pr-2">
        <p className="text-lg text-gray-700 mb-6">
          Dear {recipientName},
        </p>
        <p className="text-lg text-gray-700 mb-4">
          From day one, you’ve been more than just support, you’ve been a steady hand, a guide, and honestly, like family. The level of patience, guidance, and encouragement you’ve given me has shaped my internship experience in a big way.
        </p>
        <p className="text-lg text-gray-700 mb-4">
         What I’ll really remember though, is the balance,you showed me how to carry yourself with true professionalism, but also how to make space for friendship, jokes, and those light moments that make the workplace feel like home.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I have deep respect for the effort you put in behind the scenes, and real gratitude for the bond we’ve built along the way. Thank you for being such an important part of this journey.
        </p>
        <p className="text-lg text-gray-700">
          With gratitude,
          <br />
          <span className="font-lora-italic font-semibold">Jaden</span>
        </p>
      </div>
      <button
        onClick={onFlip}
        className="mt-6 w-full py-2 px-4 bg-teal-500 text-white font-poppins font-bold rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-lg"
      >
        Flip Back
      </button>
    </div>
  );
};
