import React, { useState, useEffect, memo } from 'react';
import { animated, useTransition } from 'react-spring';

const Waterfall: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const transitions = useTransition(children, {
    from: { position: 'absolute', top: 0, left: 0, transform: 'translate3d(0,-80%,0) scale(0.9)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0) scale(1)', opacity: 1 },
    leave: { transform: 'translate3d(0,60%,0) scale(0.7)', opacity: 0 },
  });

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ visibility: 'hidden' }}>{children}</div>
      {transitions((style, item, key) => (
        <animated.div key={key} style={style}>
          {item}
        </animated.div>
      ))}
    </div>
  );
};

const emojiDigits = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

const AnimatedEmojiNumber: React.FC<{ value: number }> = memo(({ value }) => (
  <div>
    {value
      .toString()
      .split('')
      .map((n, i) => (
        <span key={i}>{emojiDigits[parseInt(n)]}</span>
      ))}
  </div>
));

const Separator = () => <b style={{ margin: '0 5px 0 2px', color:'#fff' }}>:</b>;

const padTime = (t: number, l = 2) => t.toString().padStart(l, '0');

const Time: React.FC<{ value: Date }> = ({ value }) => (
  <div className='flex'>
    <AnimatedEmojiNumber value={parseInt(padTime(value.getHours()))} />
    <Separator />
    <AnimatedEmojiNumber value={parseInt(padTime(value.getMinutes()))} />
    <Separator />
    <AnimatedEmojiNumber value={parseInt(padTime(value.getSeconds()))} />
    <Separator />
    <AnimatedEmojiNumber value={parseInt(padTime(value.getMilliseconds(), 3))} />
  </div>
);

const useIntervalValue = (factory: () => Date, interval: number) => {
  const [value, setValue] = useState(factory);

  useEffect(() => {
    const tid = setInterval(() => setValue(factory), interval);
    return () => clearInterval(tid);
  }, [interval, factory]);

  return value;
};

const CurrentTime = () => {
  const now = useIntervalValue(() => new Date(), 193);
  const registrationTime = new Date('2024-10-09T14:30:00.000Z');
  const remainingTime = new Date(registrationTime.getTime() - now.getTime());

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      <Time value={remainingTime} />
    </div>
  );
};

export default CurrentTime;