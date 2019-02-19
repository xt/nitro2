import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header/index';

it('Header App renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
