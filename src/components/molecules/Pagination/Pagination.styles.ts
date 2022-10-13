import styled from '@emotion/styled';

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& > button': {
    padding: 0,
    width: 32,
    "& + *": {
      marginLeft: 8
    }
  },
});

export const InputWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  "& .aronawa-select": {
    flex: 1,
    minWidth: 64
  }
});

export const Dot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  width: 32,
});

export const PageOf = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  paddingLeft: 8,
  paddingRight: 8,
});
