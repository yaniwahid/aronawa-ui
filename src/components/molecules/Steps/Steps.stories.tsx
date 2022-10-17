import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Steps, { StepItem } from './Steps';
import { ISteps } from './Steps.types';

export default {
  title: 'Molecules/Steps',
  component: Steps,
  argTypes: {},
} as ComponentMeta<typeof Steps>;

export const Basic = (args: ISteps) => (
  <Steps defaultActive={1} {...args}>
    <StepItem title="Step 1" description="Tambah Produk Sekaligus">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
      Semantics, a large language ocean. A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
      sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind
      texts it is an almost unorthographic life One day however a small line of blind text by the
      name of Lorem Ipsum decided to leave for the far World of Grammar.
    </StepItem>
    <StepItem title="Step 2" description="Review Produk">
      The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
      Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her
      seven versalia, put her initial into the belt and made herself on the way.
    </StepItem>
    <StepItem title="Step 3" description="Publish Produk" isFailed>
      When she reached the first hills of the Italic Mountains, she had a last view back on the
      skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
      her own road, the Line Lane. Pityful a rethoric question ran over her cheek.
    </StepItem>
  </Steps>
);
