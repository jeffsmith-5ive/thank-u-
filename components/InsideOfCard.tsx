
import React from 'react';

interface InsideOfCardProps {
  onFlip: () => void;
  recipientName: string;
}

export const InsideOfCard: React.FC<InsideOfCardProps> = ({ onFlip, recipientName }) => {
    const messageParagraphs = [
        "You ain’t just a friend — you’s my real day-one, my ride-or-die, my partner-in-crime from long time. We handle bacchanal, blessings, pressure, and pure vibes together, and we always bounce back like two seasoned Trinis who know the game.",
        "Thanks for all the years of fun and memories — and cheers to even more fun, more madness, and more legendary moments ahead. So… that’s 19 slap or wha? 🎉😂",
        "More life, more guidance, more success. Enjoy yuh day to de max, mih brother."
    ];

  return (
    <div className="w-full h-full rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
      <div className="overflow-y-auto pr-2 text-center flex-grow flex flex-col justify-center">
          <>
            <h2 className="text-3xl text-gray-800 mb-4 font-poppins font-bold">
              🎉 Happy Birthday, {recipientName}! 🎉
            </h2>
            {messageParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                </p>
            ))}
          </>
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
