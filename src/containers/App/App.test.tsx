import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';

test('App test created', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot()
});