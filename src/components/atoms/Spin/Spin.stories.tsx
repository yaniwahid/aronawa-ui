import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import Spin from './Spin';
import { ISpin } from './Spin.types';

export default {
  title: 'Atoms/Spin',
  component: Spin,
  argTypes: {
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      description: 'Use the isLoading prop to change the isLoading of the Spin',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Spin>;

export const Basic = (args: ISpin) => (
  <Spin {...args}>
    <Card
      title="Card Title"
      footer={
        <>
          <Button>Cancel</Button>
          <Button color="primary">Save</Button>
        </>
      }
    >
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean. A small river named Duden flows by their place and
        supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about
        the blind texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>
      <p>
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
        Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
        seven versalia, put her initial into the belt and made herself on the way.
      </p>
    </Card>
  </Spin>
);
