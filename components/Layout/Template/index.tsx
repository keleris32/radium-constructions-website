/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import Footer from '../Footer';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Template: React.FC<Props> = ({ children, footer, socialMedia }) => (
  <main>
    {children}
    <Footer footer={footer} socialMedia={socialMedia} />
  </main>
);

export default Template;
