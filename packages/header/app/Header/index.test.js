import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

it('Header renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
