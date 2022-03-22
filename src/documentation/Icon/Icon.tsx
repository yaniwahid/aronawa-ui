import { Text, Grid, Flex, GridProps } from '@chakra-ui/react';
import React from 'react';
import Icon from '../../components/Icon';
import { data } from './IconData';

type IconDocProps = { name?: string };

export const IconDoc = (props: IconDocProps) => {
  const { name } = props;
  return (
    <Flex justify="center" align="center" flexDirection="column">
      <Flex
        w="14"
        h="14"
        justify="center"
        align="center"
        bg="gray.50"
        borderRadius="lg"
        boxShadow="base"
      >
        <Icon name={name} size={40} />
      </Flex>
      <Text mt="2" fontSize="x-small" textAlign="center" wordBreak="break-word">
        {name}
      </Text>
    </Flex>
  );
};

export const IconDocs = () => {
  return data.map((item) => <IconDoc name={item.name} />);
};

export const IconDocWrapper: React.FC<GridProps> = (props) => (
  <Grid
    gap="6"
    templateColumns="repeat(8,1fr)"
    p="8"
    border="1px"
    borderRadius="lg"
    alignItems="start"
    mt="16"
    {...props}
  />
);
