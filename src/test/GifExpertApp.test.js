import React from 'react';
import {shallow} from 'enzyme';
import {GifExpertApp} from './../GifExpertApp';
import '@testing-library/jest-dom';

describe('Test functional on `GifExpertApp`', () => {
  test('Deberia renderizar correctamente el component', () => {
    const component = shallow(<GifExpertApp defaultCategories={[]} />);

    expect(component).toMatchSnapshot();
  });

  test('Deberia renderizar una lista de categorias', () => {
    const categories = ['Naruto', 'Samurai x'];
    const component = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(component.find('GifGrid').length).toBe(categories.length);
  });
});
