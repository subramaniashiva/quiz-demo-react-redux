import React from 'react';
import renderer from 'react-test-renderer';

import QuestionIndex from 'components/questionIndex';

describe('QuestionIndex component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <QuestionIndex />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
