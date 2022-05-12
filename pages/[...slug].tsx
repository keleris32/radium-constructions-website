/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import Template from '../components/layout/Template';
import useStyles from '../css/pages/[...slug]';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';
import PageHero from '../components/layout/PageHero';

export type Props = {
  page?: PageType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Page: React.FC<Props> = (props) => {
  const { page, footer, socialMedia } = props;
  const classes = useStyles();

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      className={classes.page}
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={page.meta?.meta?.title || page.title}
        description={page.meta?.meta?.description}
        keywords={page.meta?.meta?.keywords}
      />
      <PageHero
        title={page.title}
        type={page.heroType}
        content={page.heroContent}
        media={page.heroMedia}
      />
      <RenderBlocks layout={page.layout} />
    </Template>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || 'home';

  const pageReq = await fetch(
    // eslint-disable-next-line comma-dangle
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`
  );
  const pageData = await pageReq.json();

  return {
    props: {
      page: pageData.docs[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageReq = await fetch(
    // eslint-disable-next-line comma-dangle
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100`
  );
  const pageData = await pageReq.json();

  return {
    paths: pageData.docs.map(({ slug }) => ({
      params: { slug: slug.split('/') },
    })),
    fallback: false,
  };
};
