import React from 'react';

function Icon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ margin: 'auto' ,width: '1.025rem'}}
      width='30'
      height='30'
      display='block'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 100 100'
    >
      <circle
        cx='50'
        cy='50'
        r='35'
        fill='none'
        stroke='#fff'
        strokeDasharray='164.93361431346415 56.97787143782138'
        strokeWidth='10'
      >
        <animateTransform
          attributeName='transform'
          dur='1s'
          keyTimes='0;1'
          repeatCount='indefinite'
          type='rotate'
          values='0 50 50;360 50 50'
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Icon;
