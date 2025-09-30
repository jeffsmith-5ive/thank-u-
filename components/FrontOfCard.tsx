
import React from 'react';
import { CakeIcon } from './Icons';

interface FrontOfCardProps {
  onFlip: () => void;
}

export const FrontOfCard: React.FC<FrontOfCardProps> = ({ onFlip }) => {
  return (
    <div
      className="w-full h-full rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-400 p-8 flex flex-col items-center justify-center cursor-pointer shadow-2xl hover:shadow-yellow-400/50 transition-shadow duration-300 group"
      onClick={onFlip}
    >
      <div className="relative w-full h-full border-4 border-white/80 rounded-lg flex flex-col items-center justify-center text-center p-4">
        <div className="absolute -top-4 -left-4 text-rose-500 opacity-80">
          <CakeIcon className="w-16 h-16" />
        </div>

        <h1 className="font-poppins font-black text-6xl md:text-7xl text-teal-800 drop-shadow-lg leading-tight">
          Happy<br />Birthday
        </h1>
        <p className="font-poppins font-bold text-4xl text-rose-600 mt-4 drop-shadow">
          Gitanjali!
        </p>

        <div className="mt-auto bg-white/50 rounded-full px-6 py-2">
          <p className="text-lg text-teal-800 font-semibold animate-pulse">
            👉 Click to open
          </p>
        </div>
      </div>
    </div>
  );
};
