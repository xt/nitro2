import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';

it('Footer renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
