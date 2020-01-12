const PRIMARY_COLOR = '#12A7E2';
const SECONDARY_COLOR = '#FFFFFF';
const GREY_COLOR = '#F1F2F2';
const DANGER_COLOR = '#A82A2A';
const WARNING_COLOR = '#A66321';
const SUCCESS_COLOR = '#0A6640';

const buttonVariants = {
  primary: {
    color: `${SECONDARY_COLOR}!important`,
    backgroundColor: `${PRIMARY_COLOR}!important`,
    cursor: 'pointer',
    border: 'none'
  },
  secondary: {
    color: `${PRIMARY_COLOR}!important`,
    backgroundColor: `${SECONDARY_COLOR}!important`,
    border: `1px solid ${PRIMARY_COLOR}`,
    cursor: 'pointer'
  }
};

export default {
  breakpoints: ['640px', '1000px'],
  fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '32px', '48px', '64px'],
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    grey: GREY_COLOR,
    danger: DANGER_COLOR,
    warning: WARNING_COLOR,
    success: SUCCESS_COLOR
  },
  space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  displays: ['none', 'block', 'flex'],
  buttons: buttonVariants
};
