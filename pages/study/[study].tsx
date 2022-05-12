/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Cell, Grid } from '@faceless-ui/css-grid';
import Link from 'next/link';
import Head from '../../components/Head';
import Template from '../../components/layout/Template';
import useStyles from '../../css/pages/study';
import { Type as FooterType } from '../../globals/Footer';
import { Type as SocialMediaType } from '../../globals/SocialMedia';
import { Type as StudyType } from '../../collections/Study';
import GridContainer from '../../components/layout/GridContainer';
import RenderBlocks from '../../components/RenderBlocks';
import Media from '../../components/Media';
import Gutter from '../../components/layout/Gutter';
import { AbsoluteNoise } from '../../components/Noise/AbsoluteNoise';

export type Props = {
  study: StudyType;
  statusCode: number;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Study: React.FC<Props> = (props) => {
  const { footer, socialMedia, study } = props;
  const classes = useStyles();

  return (
    <Template
      className={classes.studies}
      footer={footer}
      socialMedia={socialMedia}
    >
      <Head
        title={study.meta?.meta?.title || study.title}
        description={study.meta?.meta?.description}
        keywords={study.meta?.meta?.keywords}
      />
      <GridContainer>
        <header className={classes.header}>
          <div className={classes.label}>
            <Link href="/studies">
              <a className={classes.label}>Study</a>
            </Link>
          </div>
          <h1 className={classes.title}>{study.title}</h1>
        </header>
      </GridContainer>
      <div className={classes.featuredMediaWrap}>
        <Gutter right className={classes.featuredMediaGutter}>
          <Media
            {...study?.featuredMedia}
            preferredSize="feature"
            className={classes.featuredMedia}
          />
        </Gutter>
        {(study?.client || study?.location || study?.categories) && (
          <GridContainer>
            <Grid htmlElement="ul" className={classes.meta}>
              {study?.client && (
                <Cell htmlElement="li" cols={3} start={2}>
                  <div className={classes.metaLabel}>Client</div>
                  <div>{study.client}</div>
                </Cell>
              )}
              {study?.categories?.length > 0 && (
                <Cell htmlElement="li" cols={3}>
                  <div className={classes.metaLabel}>Categories</div>
                  <div>
                    {study.categories.map((category, i) => (
                      <span key={i}>
                        {category.title}
                        {i !== study.categories.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </Cell>
              )}
              {study?.location && (
                <Cell htmlElement="li" cols={3} startM={2}>
                  <div className={classes.metaLabel}>Location</div>
                  <div>{study.location}</div>
                </Cell>
              )}

              <AbsoluteNoise className={classes.backgroundNoise} />
            </Grid>
          </GridContainer>
        )}
      </div>
      <RenderBlocks layout={study.layout} />
    </Template>
  );
};

export default Study;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.study;

  const studyReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/studies?where[slug][equals]=${slug}`
  );
  const studyData = await studyReq.json();

  return {
    props: {
      study: studyData.docs[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const studyReq = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/studies?limit=100`
  );
  const studyData = await studyReq.json();

  return {
    paths: studyData.docs.map(({ slug }) => ({
      params: { study: slug },
    })),
    fallback: false,
  };
};
