import {
  Box,
  FlexProps,
  Grid,
  GridProps,
  Flex,
  useTheme,
  Code,
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
        boxSize="5rem"
        boxShadow="base"
        mr="4"
        bg={color}
      />
      <Box>
        <Box
          textStyle="body"
          color="font.pencil"
          textTransform="capitalize"
          mb="2"
        >
          {name}
        </Box>
        <Box textStyle="body2">{colorCode}</Box>
        <Box textStyle="body2" mt="1">
          <Code>{name.replace(/ /g, '.').toLocaleLowerCase()}</Code>
        </Box>
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
