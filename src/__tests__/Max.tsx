import React from 'react'
import renderer from 'react-test-renderer';
import Max from '../components/main/Info/Max';

test('InfoPanel test created', () => {
  const component = renderer.create(<Max temp="temp" city="city" desc="desc" icon="icon" time="time" />).toJSON();
  expect(component).toMatchSnapshot()
});