import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Carousel from '../Carousel';
import { ICarousel } from './Carousel.types';

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  argTypes: {
    slidesToShow: {
      name: 'slidesToShow',
      defaultValue: 1,
      description: 'Use the slidesToShow prop to change the slidesToShow of the Carousel',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'number',
      },
    },
    slidesToScroll: {
      name: 'slidesToScroll',
      defaultValue: 1,
      description: 'Use the slidesToScroll prop to change the slidesToScroll of the Carousel',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'number',
      },
    },
    dots: {
      name: 'dots',
      defaultValue: false,
      description: 'Use the dots prop to change the dots of the Carousel',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Carousel>;

const data = [
  {
    imageAlt: 'Slide 1',
    imageUrl: 'https://static.bmdstatic.com/st/home/e61863-MB1%20Tanpa%20Ornamen.jpg',
    link: 'https://static.bmdstatic.com/st/home/e61863-MB1%20Tanpa%20Ornamen.jpg',
    newTab: true,
  },
  {
    imageAlt: 'Slide 2',
    imageUrl: 'https://static.bmdstatic.com/st/home/c74266-header.jpg',
    link: 'https://static.bmdstatic.com/st/home/c74266-header.jpg',
    newTab: true,
  },
  {
    imageAlt: 'Slide 3',
    imageUrl: 'https://static.bmdstatic.com/st/home/2d5f8b-mb.jpg',
    link: 'https://static.bmdstatic.com/st/home/2d5f8b-mb.jpg',
    newTab: true,
  },
];

export const Basic = (args: ICarousel) => {
  return <Carousel images={data} {...args} />;
};
