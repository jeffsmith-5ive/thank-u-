
import React from 'react';

interface InsideOfCardProps {
  onFlip: () => void;
  recipientName: string;
}

export const InsideOfCard: React.FC<InsideOfCardProps> = ({ onFlip, recipientName }) => {
  return (
    <div className="w-full h-full rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
      <div className="overflow-y-auto pr-2 text-center flex-grow flex flex-col justify-center">
        <h2 className="text-3xl text-gray-800 mb-4 font-poppins font-bold">
          🎉 Happy Birthday, Gita! 🎉
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          To the funniest, most dramatic, and lowkey crashout queen — yet somehow always stealing the show with your charm 😌✨
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Life’s never dull when you’re around — it’s giving main character energy 24/7. Keep being the chaotic good we all need and never lose that spark that makes you you. 💅🔥
        </p>
        <p className="text-lg text-gray-700 mt-6 mb-4 font-semibold">
          Much love & plenty vibes today 💖🎂💃
        </p>
        <p className="text-lg text-gray-700 font-semibold">
          — Jeff 💫
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
