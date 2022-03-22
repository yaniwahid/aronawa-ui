import { Box, Code, Grid } from '@chakra-ui/react';
import React from 'react';

type TypographyProps = {
  title?: string;
  textStyle?: string;
  family?: string;
  size?: string;
  lineHeight?: string;
};

const capFirstLetterInSentence = (sentence) => {
  let words = sentence.split(' ').map((word) => {
    return word[0].toLowerCase() + word.slice(1);
  });
  return words.join(' ');
};

export const Typography = (props: TypographyProps) => {
  const { title, textStyle, family, size, lineHeight, ...rest } = props;

  return (
    <Box {...rest}>
      <Box as="h5" textStyle={textStyle}>
        {title}
      </Box>
      <Grid gap="6" gridTemplateColumns="2fr 1fr 1fr 2fr" mt="4">
        <Box>
          <Box textStyle="body" color="font.pencil">
            Family
          </Box>
          <Box textStyle="body2" mt="1">
            {family}
          </Box>
        </Box>
        <Box>
          <Box textStyle="body" color="font.pencil">
            Size
          </Box>
          <Box textStyle="body2" mt="1">
            {size}px
          </Box>
        </Box>
        <Box>
          <Box textStyle="body" color="font.pencil">
            Line Height
          </Box>
          <Box textStyle="body2" mt="1">
            {lineHeight}px
          </Box>
        </Box>
        <Box>
          <Box textStyle="body" color="font.pencil">
            Code
          </Box>
          <Box textStyle="body2" mt="1">
            <Code>{capFirstLetterInSentence(title.replace(/ /g, ''))}</Code>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
