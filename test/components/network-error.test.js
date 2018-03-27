import React from 'react';
import renderer from 'react-test-renderer';

import NetworkError from 'components/networkError';

describe('NetworkError component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <NetworkError />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
