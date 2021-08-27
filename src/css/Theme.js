export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]})`,
  [BREAKPOINT_NAMES.SMALL]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media prit',
};

export default {
  //색상
  color: {
    primary: '#03a9f4',
    secondary: '#795548',
    white: '#FFFFFF',
    gray: '#CCCCCC',
    default: '#999999',
    error: 'blue',
  },
  //글꼴 크기
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: '60xp',
    lg: '54xp',
    md: '36xp',
    sm: '24xp',
    xs: '18xp',
  },
  //갈이 단위
  unit: 4,
  responsive,
};
