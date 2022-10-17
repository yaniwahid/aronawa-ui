import styled from '@emotion/styled';

export const UploadStyled = styled.div({
  '& .aronawa-upload': {
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
    '& > * + button': {
      marginTop: 8,
    },
  },
});
