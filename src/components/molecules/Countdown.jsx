import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

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

    // Initial calculation
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
      className={cn('flex flex-wrap gap-4 md:gap-8 justify-center items-center select-none', className)}
    >
      <TimeUnit value={timeLeft.days} label="DÍAS" />
      <TimeUnit value={timeLeft.hours} label="HORAS" />
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <TimeUnit value={timeLeft.seconds} label="SEGS" />
    </div>
  );
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative h-20 w-24 md:h-28 md:w-32 overflow-hidden flex justify-center items-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
          transition={{ 
            duration: 0.4, 
            ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for a "premium" feel
          }}
          className="text-4xl md:text-6xl font-bold text-primary tabular-nums"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/5 to-transparent rounded-2xl" />
    </div>
    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mt-4 text-white/50 font-medium">{label}</span>
  </div>
);

export default Countdown;
