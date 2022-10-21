import { render } from '@testing-library/react';
import React from 'react';
import Badge from '../Badge';

describe('Badge', () => {
  it('renders a badge', () => {
    const badge = render(<Badge>Badge</Badge>);
    expect(badge).toMatchSnapshot();
  });

  it('renders a badge color', () => {
    const neutral = render(<Badge color="neutral">Badge Color Neutral</Badge>);
    const primary = render(<Badge color="primary">Badge Color Primary</Badge>);
    const secondary = render(<Badge color="secondary">Badge Color Secondary</Badge>);
    const approval = render(<Badge color="approval">Badge Color Approval</Badge>);
    const danger = render(<Badge color="danger">Badge Color Danger</Badge>);
    expect(neutral).toMatchSnapshot();
    expect(primary).toMatchSnapshot();
    expect(secondary).toMatchSnapshot();
    expect(approval).toMatchSnapshot();
    expect(danger).toMatchSnapshot();
  });

  it('renders a badge variant', () => {
    const solid = render(<Badge variant="solid">Badge Variant Solid</Badge>);
    const ghost = render(<Badge variant="ghost">Badge Variant Ghost</Badge>);
    const indicator = render(<Badge variant="indicator">Badge Variant Indicator</Badge>);
    const subtle = render(<Badge variant="subtle">Badge Variant Subtle</Badge>);
    expect(solid).toMatchSnapshot();
    expect(ghost).toMatchSnapshot();
    expect(indicator).toMatchSnapshot();
    expect(subtle).toMatchSnapshot();
  });

  it('renders a badge with close', () => {
    const badge = render(<Badge isClosable>Badge</Badge>);
    expect(badge).toMatchSnapshot();
  });
});
