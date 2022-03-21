const textStyles = {
  displayXlarge: {
    fontSize: '2.625rem',
    fontWeight: 'medium',
    lineHeight: '2.75rem',
    fontFamily: '"geomanistmedium", sans-serif',
  },
  displayLarge: {
    fontSize: '1.75rem',
    fontWeight: 'medium',
    lineHeight: '2rem',
    fontFamily: '"geomanistmedium", sans-serif',
  },
  displayMedium: {
    fontSize: '1.625rem',
    fontWeight: 'normal',
    lineHeight: '2rem',
    fontFamily: '"geomanistbook", sans-serif',
  },
  displaySmall: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
    lineHeight: '1.5rem',
    fontFamily: '"geomanistbook", sans-serif',
  },
  heading: {
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: '1.5rem',
  },
  subheading: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    lineHeight: '1rem',
    textTransform: 'uppercase',
  },
  body: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
    lineHeight: '1.25rem',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 'semibold',
    lineHeight: '1.25rem',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
    lineHeight: '1rem',
  },
};

export type TextStyles = typeof textStyles;

export default textStyles;
