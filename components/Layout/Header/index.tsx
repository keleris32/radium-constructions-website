/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import Link from 'next/link';
import { Modal, useModal } from '@faceless-ui/modal';
import { Cell, Grid } from '@faceless-ui/css-grid';
import useStyles from './css';
import { Type as MegaMenuType } from '../../../globals/MegaMenu';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import Icon from '../../graphics/Icon';
import Hamburger from './Hamburger';
import GridContainer from '../GridContainer';
import CMSLink from '../../Link';
import LargeBody from '../../type/LargeBody';
import LetsTalk from '../../LetsTalk';

export type Props = {
  megaMenu: MegaMenuType;
  socialMedia: SocialMediaType;
};

const menuSlug = 'menu';

const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { currentModal, toggle } = useModal();
  const menuActive = currentModal === menuSlug;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const classes = useStyles({ menuActive });

  return (
    <header className={classes.header}>
      <Link href="/">
        {
          // eslint-disable-next-line react/jsx-max-props-per-line
          <a href="/" className={classes.logo}>
            <Icon className={classes.icon} />
          </a>
        }
      </Link>

      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggle(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>
      <Modal slug={menuSlug} className={classes.menu}>
        <GridContainer>
          <Grid>
            <Cell cols={8} htmlElement="nav">
              {megaMenu?.nav?.map(({ link }, i) => (
                <CMSLink {...link} key={i} className={classes.primaryNavItem}>
                  <h3 key={i} style={{ marginTop: i === 0 ? 0 : undefined }}>
                    {link.label}
                  </h3>
                </CMSLink>
              ))}
            </Cell>
            <Cell cols={3}>
              {socialMedia?.link?.map(({ url, label }) => (
                <LargeBody key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.secondaryNavItem}
                  >
                    {label}
                  </a>
                </LargeBody>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
        <div className={classes.ctaWrap}>
          <LetsTalk className={classes.ctaCSS} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
