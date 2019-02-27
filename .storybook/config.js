import { configure } from '@storybook/react';
import '../storybook/css/style.css';
import '../storybook/css/icons.css';

function loadStories() {
  require('../storybook/General/');
  require('../storybook/Navigation/');
  require('../storybook/Data Entry/');
  require('../storybook/Data Display/');
  require('../storybook/Feedback/');
  require('../storybook/Other/');
  // You can require as many stories as you need.
}

configure(loadStories, module);
