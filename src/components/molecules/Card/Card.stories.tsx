import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button';
import Card from './Card';
import { ICard } from './Card.types';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Card Title',
      description: 'Use the title prop to change the title of the Card',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      defaultValue: 'md',
      description: 'Use the size prop to change the size of the Card',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const Basic = (args: ICard) => (
  <Card {...args}>
    <p>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
      sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind
      texts it is an almost unorthographic life One day however a small line of blind text by the
      name of Lorem Ipsum decided to leave for the far World of Grammar.
    </p>
    <p>
      The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
      Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
      seven versalia, put her initial into the belt and made herself on the way.
    </p>
  </Card>
);

export const WithExtra = (args: ICard) => (
  <Card
    {...args}
    extra={
      <>
        <Button icon="edit">Edit</Button>
        <Button icon="ellipsis-h" />
      </>
    }
  >
    <p>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
      sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind
      texts it is an almost unorthographic life One day however a small line of blind text by the
      name of Lorem Ipsum decided to leave for the far World of Grammar.
    </p>
    <p>
      The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
      Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
      seven versalia, put her initial into the belt and made herself on the way.
    </p>
  </Card>
);

export const WithFooter = (args: ICard) => (
  <Card
    {...args}
    extra={
      <>
        <Button icon="edit">Edit</Button>
        <Button icon="ellipsis-h" />
      </>
    }
    footer={
      <>
        <Button>Cancel</Button>
        <Button color="primary">Save</Button>
      </>
    }
  >
    <p>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
      sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind
      texts it is an almost unorthographic life One day however a small line of blind text by the
      name of Lorem Ipsum decided to leave for the far World of Grammar.
    </p>
    <p>
      The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
      Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
      seven versalia, put her initial into the belt and made herself on the way.
    </p>
  </Card>
);
