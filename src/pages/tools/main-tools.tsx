import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import formatTime from '~/utils/formatTime';

const MainTools = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime(time + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning, time]);
  return (
    <>
      <Head>
        <title>Main Tools</title>
      </Head>
      <>
        <h3>Timer</h3>
        <section className="my-4 flex items-center justify-between">
          <span className="flex gap-4">
            <button onClick={() => setTimerRunning(true)} className="bg-green-700">
              Start
            </button>
            <button onClick={() => setTimerRunning(false)} className="bg-red-700">
              Stop
            </button>
          </span>
          <span className="text-xl">{formatTime(time)}</span>
        </section>
      </>
    </>
  );
};

export default MainTools;
