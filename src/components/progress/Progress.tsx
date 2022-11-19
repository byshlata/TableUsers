import React, { Dispatch, ReactElement, SetStateAction, useEffect } from 'react';

import { DarthVaderSaber } from './DarthVaderSaber';
import { DELAY_INTERVAL, END_LOADING, TIME_INTERVAL } from './data/data';
import style from './Style.module.sass';

type ProgressType = {
  percent: number;
  setPercent: Dispatch<SetStateAction<number>>;
};

export const Progress = ({ setPercent, percent }: ProgressType): ReactElement => {
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(startPercent => {
        if (startPercent >= END_LOADING) {
          clearInterval(interval);
        }
        return startPercent + TIME_INTERVAL;
      });
    }, DELAY_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.saberDemo}>
      <div className={style.item}>
        <DarthVaderSaber percent={percent} />
      </div>
    </div>
  );
};
