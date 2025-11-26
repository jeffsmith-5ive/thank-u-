
import React from 'react';

interface InsideOfCardProps {
  onFlip: () => void;
  recipientName: string;
}

export const InsideOfCard: React.FC<InsideOfCardProps> = ({ onFlip, recipientName }) => {
    const messageParagraphs = [
        "Wishing you a day overflowing with joy, love, and zero stress — because if anybody in this building earn a soft day, is you.",
        "You’re the certified early bird of CTS: always first in the office, bright-eyed, ready before the lights even warm up. While the rest of us still negotiating with our alarm clocks, you done reach, settle in, and halfway through your morning routine. Operational excellence at its finest.",
        "And listen — we can’t forget the classic Rianna trademarks: the lil hand shaking when she multitasking, the unexpected lil “buff-up” when the day running hot, and then right after, the sweetest smile like nothing ever happen. That’s the signature CTS flavor right there. Pure authenticity.",
        "But real talk — your kindness is what stands out most. You’re patient, caring, and always willing to help, even when your workload heavier than HSB’s syllabus. You make the space warmer, the vibes brighter, and the people better.",
        "Thank you for your hard work, your heart, and your impact. CTS running smoother because of you.",
        "Here’s to another year of blessings, growth, laughter, and showing everybody how a real early-morning professional does it.",
        "Enjoy your special day to the max, Ms. Rianna — you truly deserve it. 🌸🎂✨"
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
            <div className="mt-6 pt-4 border-t-2 border-teal-50">
                <p className="text-xl text-teal-700 font-bold italic">
                    From Liam and Jaden
                </p>
            </div>
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
