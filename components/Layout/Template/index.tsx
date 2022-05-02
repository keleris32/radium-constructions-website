import React from 'react';
import Footer from '../Footer';

const Template: React.FC = ({ children }) => (
  <main>
    {children}
    <Footer />
  </main>
);

export default Template;
