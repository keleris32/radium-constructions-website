import { createUseStyles } from 'react-jss';
import colors from '../../../css/colors';

export default createUseStyles((_theme) => ({
  path: ({ color }) => ({
    stroke: colors[color],
  }),
}));
