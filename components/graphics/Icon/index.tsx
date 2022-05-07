import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="25"
    height="25"
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z"
      fill="#ffffff"
    />
    <path
      d="M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z"
      fill="#ffffff"
    />
  </svg>
);

export default Icon;
