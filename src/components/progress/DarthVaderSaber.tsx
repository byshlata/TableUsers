import React, { ReactElement } from 'react';

import {
  DEFAULT_WIDTH_SCREEN,
  END_LOADING,
  LASER_NOW,
  ONE_HUNDRED_PERCENT,
} from './data/data';
import style from './Style.module.sass';

type DarthVaderSaberType = {
  percent: number;
};

export const DarthVaderSaber = ({ percent }: DarthVaderSaberType): ReactElement => {
  const percentNow = percent >= END_LOADING ? END_LOADING : percent;
  const glowStyle =
    percent >= END_LOADING
      ? `${style.laserGlow} ${style.laserGlowActive}`
      : `${style.laserGlow}`;
  const width = percentNow * LASER_NOW;
  const laserStyle = { width: `${width}px` };
  const laserClass =
    percentNow >= END_LOADING ? `${style.laser} ${style.laserActive}` : `${style.laser}`;
  const screenWidth = window.innerWidth;

  return (
    <div style={{ transform: `scale(${screenWidth / DEFAULT_WIDTH_SCREEN})` }}>
      <h2 className={style.title}>Loading</h2>
      <div className={style.percent}>{(percent * ONE_HUNDRED_PERCENT).toFixed(0)}%</div>
      <div className={`${style.saber} ${style.darthVaderSaber}`}>
        <div className={style.handle}>
          <div className={style.tip} />
          <div className={`${style.grip} ${style.grip1}`} />
          <div className={`${style.grip} ${style.grip2}`} />
          <div className={`${style.grip} ${style.grip3}`} />
          <div className={style.center} />
          <div className={style.laser} />
          <div className={style.centerBottom}>
            <div className={style.screw} />
          </div>
          <div className={style.cables}>
            <div className={`${style.hole} ${style.hole1}`} />
            <div className={`${style.hole} ${style.hole2}`} />
            <div className={`${style.cable} ${style.cable1}`} />
            <div className={`${style.cable} ${style.cable2}`} />
          </div>
          <div className={style.shadow} />
          <div className={laserClass} style={laserStyle}>
            <div className={glowStyle} />
            <div className={style.laserTip}>
              <div className={glowStyle} />
            </div>
          </div>
          <div className={style.laserTip} />
          <div className={style.guardRectangle}>
            <div className={style.shadow} />
          </div>
          <div className={style.guardTriangle} />
          <div className={style.guardTriangleShadow} />
        </div>
      </div>
    </div>
  );
};
