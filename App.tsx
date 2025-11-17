
import React, { useState, useCallback } from 'react';
import { FrontOfCard } from './components/FrontOfCard';
import { InsideOfCard } from './components/InsideOfCard';
import { BackOfCard } from './components/BackOfCard';
import { HummingbirdIcon } from './components/Icons';

const App: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const recipientName = "Satesh";

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-teal-100 via-yellow-50 to-rose-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div style={{ perspective: '1200px' }} className="w-full max-w-lg h-[600px] mb-8">
          <div
            className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
            style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
              <FrontOfCard onFlip={handleFlip} recipientName={recipientName} />
            </div>
            <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <InsideOfCard onFlip={handleFlip} recipientName={recipientName} />
            </div>
          </div>
        </div>

        <BackOfCard />
      </div>

       <div className="absolute bottom-5 right-5 text-teal-600 opacity-50">
        <HummingbirdIcon className="w-24 h-24" />
       </div>
       <div className="absolute top-5 left-5 text-rose-400 opacity-40 transform -scale-x-100">
        <HummingbirdIcon className="w-16 h-16" />
       </div>
    </main>
  );
};

export default App;
