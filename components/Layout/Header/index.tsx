import React from 'react';
import useStyles from './css';
import { Type as MegaMenuType } from '../../../globals/MegaMenu';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';

export type Props = {
  megaMenu: MegaMenuType;
  socialMedia: SocialMediaType;
};

const Header: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div>Logo</div>
      <div>Menu</div>
    </header>
  );
};

export default Header;
