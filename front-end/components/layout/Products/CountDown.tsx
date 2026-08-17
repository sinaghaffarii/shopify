'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  endsAt: string;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (endsAt: string): TimeLeft => {
  const difference = new Date(endsAt).getTime() - Date.now();

  if (difference <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(difference / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const pad = (value: number) => {
  return value.toString().padStart(2, '0');
};

export default function Countdown({ endsAt }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(endsAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(endsAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [endsAt]);

  return (
    <div
      dir="ltr"
      className="flex items-center gap-1 font-mono text-xs font-semibold text-gray-700 sm:text-sm"
      aria-label="زمان باقی مانده"
    >
      <span>{pad(timeLeft.hours)}</span>
      <span>:</span>
      <span>{pad(timeLeft.minutes)}</span>
      <span>:</span>
      <span>{pad(timeLeft.seconds)}</span>
    </div>
  );
}
