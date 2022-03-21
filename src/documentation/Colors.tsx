import {
  Box,
  FlexProps,
  Grid,
  GridProps,
  Flex,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';

type ColorPaletteProps = FlexProps & { color?: string; name?: string };

export const ColorPalette = (props: ColorPaletteProps) => {
  const { color, name, ...rest } = props;

  const theme = useTheme();
  let colorCode = color;
  const [shade, hue] = color.split('.');

  if (shade && hue) {
    colorCode = theme.colors[shade][hue];
  }

  if (color in theme.colors && typeof theme.colors[color] === 'string') {
    colorCode = theme.colors[color];
  }

  return (
    <Flex align="center" {...rest}>
      <Box
        borderRadius="lg"
        boxSize="4rem"
        boxShadow="inner"
        mr="4"
        bg={color}
      />
      <Box>
        <Box fontWeight="medium" textTransform="capitalize" fontSize="md">
          {name}
        </Box>
        <Box textTransform="uppercase" fontSize="sm">
          {colorCode}
        </Box>
        <Box fontSize="sm">{name.replace(/ /g, '.').toLocaleLowerCase()}</Box>
      </Box>
    </Flex>
  );
};

export const ColorPalettes = (props: { color: string }) => {
  const { color } = props;
  const theme = useTheme();
  const keys = Object.keys(theme.colors[color]);

  return keys.map((item) => (
    <ColorPalette
      key={`${color}.${item}`}
      color={`${color}.${item}`}
      name={`${color} ${item}`}
    />
  ));
};

export const ColorWrapper: React.FC<GridProps> = (props) => (
  <Grid
    gap="6"
    templateColumns="repeat(3,1fr)"
    p="8"
    border="1px"
    borderRadius="lg"
    {...props}
  />
);
