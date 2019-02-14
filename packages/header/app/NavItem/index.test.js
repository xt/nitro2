import React from 'react';
import renderer from 'react-test-renderer';
import NavItem from './index';

it('NavItem renders correctly', () => {
  const tree = renderer.create(<NavItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
