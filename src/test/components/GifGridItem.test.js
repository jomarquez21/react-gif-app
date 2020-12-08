import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from './../../components/GifGridItem';
import toJson from 'enzyme-to-json';

describe('Test funtional on `GifGridItem`', () => {
  const title = 'JoMarquez';
  const url = 'google.com';
  const component = shallow(<GifGridItem title={title} url={url} />);

  test('Ensure that GifGridItem is correctly rendered', () => {
    expect(true).toBe(true);

    expect(toJson(component)).toMatchSnapshot();
  });

  test('Should render a paragraph', () => {
    const p = component.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('Deberia tener la imagen igual a la url y alt de los props', () => {
    const img = component.find('img');

    const imgProps = img.props();

    expect(imgProps.src).toBe(url);
    expect(imgProps.alt).toBe(title);
  });

  test('Debe tener animate__fadeIn', () => {
    const div = component.find('div');

    const divProps = div.props();
    expect(divProps.className.includes('animate__fadeIn')).toBe(true);
  });
});