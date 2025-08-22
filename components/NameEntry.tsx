
import React, { useState } from 'react';
import { HummingbirdIcon } from './Icons';

interface NameEntryProps {
  onSubmit: (name: string) => void;
}

export const NameEntry: React.FC<NameEntryProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-yellow-50 to-rose-50 rounded-2xl p-8 shadow-2xl w-full max-w-md text-center border-2 border-white/50 animate-fade-in">
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        `}</style>
        <div className="absolute -top-8 -right-8 text-teal-500 opacity-70">
            <HummingbirdIcon className="w-24 h-24" />
        </div>
        <h2 className="font-poppins font-bold text-3xl text-teal-800 mb-2">A Card for... Who?</h2>
        <p className="text-gray-600 mb-6">Please enter their name to personalize the message.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
            className="w-full px-4 py-3 rounded-lg border-2 border-teal-200 focus:ring-2 focus:ring-amber-400 focus:border-teal-400 transition-all duration-300 text-lg"
            aria-label="Recipient's Name"
            required
            autoFocus
          />
          <button
            type="submit"
            className="mt-6 w-full py-3 px-4 bg-rose-500 text-white font-poppins font-bold rounded-lg hover:bg-rose-600 transition-colors duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!name.trim()}
          >
            View The Card
          </button>
        </form>
      </div>
    </div>
  );
};
