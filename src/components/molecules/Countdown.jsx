import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import BlurText from '../atoms/react-bits/BlurText.jsx';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / DAY),
        hours: Math.floor((distance % DAY) / HOUR),
        minutes: Math.floor((distance % HOUR) / MINUTE),
        seconds: Math.floor((distance % MINUTE) / SECOND),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div 
      role="timer" 
      aria-label={`PRÓXIMO LANZAMIENTO: ${new Date(targetDate).toLocaleDateString()}`}
      className={cn(
        'relative select-none flex flex-col items-center gap-4 md:gap-6',
        className
      )}
    >
      <div className="flex flex-col items-center justify-center bg-transparent backdrop-blur-3xl p-5 md:p-10 lg:p-14 rounded-[1.75rem] md:rounded-[2.8rem] border border-white/10 shadow-3xl shadow-black/50 gap-8 md:gap-12">
        <div className="flex items-center gap-1 md:gap-4 lg:gap-6">
          <TimeUnit value={timeLeft.days} label="DÍAS" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="HORAS" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="MINS" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="SEGS" />
        </div>

        <h1 className="font-heading font-black text-2xl md:text-5xl lg:text-6xl text-white tracking-tighter">
          <BlurText
            text="The Gym Bros Community"
            delay={150}
            animateBy="words"
            className="text-white font-heading font-black tracking-tighter"
          />
        </h1>
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-[50px] md:min-w-[84px] lg:min-w-[112px]">
    <div className="relative overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
          transition={{ 
            duration: 0.4, 
            ease: [0.23, 1, 0.32, 1]
          }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold font-clock text-white tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-[8px] md:text-[10px] lg:text-xs uppercase tracking-[0.3em] mt-2 md:mt-4 text-white/40 font-medium">
      {label}
    </span>
  </div>
);

const Separator = () => (
  <div className="flex flex-col gap-1.5 md:gap-3 mb-2 md:mb-4 opacity-30">
    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white" />
    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white" />
  </div>
);

export default Countdown;
