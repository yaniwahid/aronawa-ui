import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Color from '../../../themes/Color';
import Radius from '../../../themes/Radius';
import Box from '../Box';
import Col from './Col';
import Container from './Container';
import { ICol, IContainer, IRow } from './Grid.types';
import Row from './Row';

export default {
  title: 'Atoms/Grid',
  component: Container,
} as ComponentMeta<typeof Container>;

const colOptions = {
  type: 'range',
  min: 0,
  max: 11,
  step: 1,
};

const Sample = ({ children }: any) => {
  return (
    <Box
      width="100%"
      height="80px"
      border={`1px solid ${Color.slate[200]}`}
      backgroundColor={Color.slate[50]}
      borderRadius={Radius.dull}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export const _Container = (args: IContainer) => (
  <>
    <Container {...args}>
      <Row>
        <Col md={4}>
          <Sample>1 of 3</Sample>
        </Col>
        <Col md={4}>
          <Sample>2 of 3</Sample>
        </Col>
        <Col md={4}>
          <Sample>3 of 3</Sample>
        </Col>
      </Row>
    </Container>
  </>
);

_Container.args = {
  gutter: 32,
  noPadding: false,
  isFullWidth: false,
};
_Container.storyName = 'Container';

export const _Row = (args: IRow) => (
  <Row {...args}>
    <Col>
      <Sample>1 of 3</Sample>
    </Col>
    <Col md={6}>
      <Sample height={100}>2 of 3 (wider)</Sample>
    </Col>
    <Col>
      <Sample>3 of 3</Sample>
    </Col>
  </Row>
);
_Row.args = {
  gutter: 32,
  noGutter: false,
};
_Row.storyName = 'Row';

export const _Col = (args: ICol) => (
  <Container>
    <Row>
      <Col {...args}>
        <Sample>Col</Sample>
      </Col>
      <Col md={1}>
        <Sample>Col</Sample>
      </Col>
    </Row>
  </Container>
);
_Col.args = {
  sm: 1,
  md: 0,
  lg: 0,
  xl: 0,
  offset: 0,
};
_Col.argTypes = {
  sm: { control: { ...colOptions } },
  md: { control: { ...colOptions } },
  lg: { control: { ...colOptions } },
  xl: { control: { ...colOptions } },
  offset: { control: { ...colOptions } },
};
_Col.storyName = 'Col';
