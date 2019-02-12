import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './index';

it('Notification renders correctly', () => {
  const store = {
    getLikedItemsCount: () => 8,
  };
  const tree = renderer.create(<Notification store={store} />).toJSON();
  expect(tree).toMatchSnapshot();
});
