/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Type as LinkType } from '../../fields/link';

type Props = {
  className?: string;
} & LinkType;

const CMSLink: React.FC<Props> = ({ type, page, url, children, className }) => {
  const isRelativeURL = url?.indexOf('/') === 0;

  if (type === 'page' || isRelativeURL) {
    return (
      <Link href={type === 'page' ? `/${page?.slug}` : url} scroll={false}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
};

export default CMSLink;
