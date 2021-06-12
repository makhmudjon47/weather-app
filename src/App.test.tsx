import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('App test created', () => {
  const component = renderer.create(<App name="Hello" />).toJSON();
  expect(component).toMatchSnapshot()
});