/**
 * @jest-environment jsdom
 */
import { matchers } from '@emotion/jest';
import React from 'react';
import { Skeleton } from '../';
import { renderJSON } from '../test-utils';

expect.extend(matchers);

describe('skeleton', () => {
  it.each(['text', 'circular', 'rectangular'] as const)(
    'should render %s',
    shape => {
      const json = renderJSON(<Skeleton shape={shape} />);
      expect(json).toMatchSnapshot();
    },
  );

  it('should be able to set size', () => {
    const circle = renderJSON(<Skeleton shape="circular" size="200" />);
    expect(circle).toHaveStyleRule('height', '200');
  });

  it('should be able to set other props', () => {
    const circle = renderJSON(<Skeleton sx={{ height: '10px' }} />);
    expect(circle).toHaveStyleRule('height', '10px');
  });

  it('should always have muted background', () => {
    const circle = renderJSON(<Skeleton shape="circular" />);
    expect(circle).toHaveStyleRule('background-color', 'muted');
  });
});
