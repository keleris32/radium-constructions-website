/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import Footer from '../Footer';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import Noise from '../../Noise';
import useStyles from './css';

type Props = {
  className?: string;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Template: React.FC<Props> = ({
  children,
  footer,
  socialMedia,
  className,
}) => {
  const { template } = useStyles();

  return (
    <main className={[className, template].filter(Boolean).join(' ')}>
      <Noise />
      {children}
      <Footer footer={footer} socialMedia={socialMedia} />
    </main>
  );
};

export default Template;
