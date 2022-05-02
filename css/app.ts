import { createUseStyles } from 'react-jss';
import { htmlFontSize, baselinePX, base } from './base';
import { h1, h2, h3, h4, h5, body } from './type';
import queries from './queries';
import colors from './colors';

export default createUseStyles({
  '@global': {
    'html, body': {
      margin: 0,
    },
    html: {
      fontFamily: 'system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      backgroundColor: colors.antique,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },

    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    ul: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    li: {
      ...body,
    },
  },
  app: {
    height: '100%',
  },
});