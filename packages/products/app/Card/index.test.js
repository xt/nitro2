import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

it('Card renders correctly', () => {
  const product = {
    productName: 'abc',
    picUrl: 'http://skadl/.png',
    price: 1500,
  };
  const tree = renderer.create(<Card product={product} />).toJSON();
  expect(tree).toMatchSnapshot();
});
