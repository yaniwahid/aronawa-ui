import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

type RoundCornersProps = {
  title?: string;
  value?: string;
};

export const RoundCorners = (props: RoundCornersProps) => {
  const { title, value, ...rest } = props;

  return (
    <Box {...rest}>
      <Flex
        p="8"
        border="3px"
        borderColor="blue.300"
        borderRadius={title.toLowerCase()}
        bg="white"
        justify="center"
        align="center"
        w="32"
        h="32"
        boxShadow="base"
      >
        {title}
      </Flex>
      <Box textStyle="body" mt="2" color="font.pencil">
        {value}
      </Box>
    </Box>
  );
};
