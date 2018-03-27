import React from 'react';
import renderer from 'react-test-renderer';

import Score from 'components/score';

describe('score component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <Score />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
