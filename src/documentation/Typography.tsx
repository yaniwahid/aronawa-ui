import { Box, Grid, Text } from '@chakra-ui/react';
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
          <Text color="font.pencil">Family</Text>
          <Text fontSize="md" fontWeight="medium">
            {family}
          </Text>
        </Box>
        <Box>
          <Text color="font.pencil">Size</Text>
          <Text fontSize="md" fontWeight="medium">
            {size}px
          </Text>
        </Box>
        <Box>
          <Text color="font.pencil">Line Height</Text>
          <Text fontSize="md" fontWeight="medium">
            {lineHeight}px
          </Text>
        </Box>
        <Box>
          <Text color="font.pencil">Code</Text>
          <Text fontSize="md" fontWeight="medium">
            {capFirstLetterInSentence(title.replace(/ /g, ''))}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
