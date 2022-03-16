import { Heading, Text } from '@chakra-ui/react';

export const ComponentName = ({ children }) => (
  <Heading
    fontSize="6xl"
    mb="8"
    fontWeight="normal"
    borderBottom="1px solid"
    borderBottomColor="gray.300"
    pb="4"
  >
    {children}
  </Heading>
);

export const Title = ({ children }) => (
  <Heading
    as="h3"
    fontSize="sm"
    textTransform="uppercase"
    mb="1"
    color="blue.500"
    letterSpacing="1px"
  >
    {children}
  </Heading>
);

export const SectionName = ({ children }) => (
  <Heading as="h2" fontSize="3xl" mt="16" mb="6" fontWeight="semibold">
    {children}
  </Heading>
);

export const Paragraph = ({ children }) => (
  <Text mb="4" fontSize="md">
    {children}
  </Text>
);
