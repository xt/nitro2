import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer/index';

it('app renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
