import React, { Component } from 'react';
import { render } from 'react-dom';
import ExecutionEnvironment from 'exenv';

if (ExecutionEnvironment.canUseDOM) {
  render(<App />, document.getElementById('##__PROJECT_NAME__##'));
}
