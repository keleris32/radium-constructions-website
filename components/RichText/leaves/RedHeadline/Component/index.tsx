import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useStyles from './css';

const RedHeadline: React.FC = ({ children }) => {
  const { redHeadline } = useStyles();
  return <span className={redHeadline}>{children}</span>;
};

export default RedHeadline;
