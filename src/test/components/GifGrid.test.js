import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from './../../components/GifGrid';
// import toJson from 'enzyme-to-json';
import { useFetchGifs } from './../../hooks/useFetchGifs';
jest.mock('./../../hooks/useFetchGifs');

describe('Test funtional on `GifGrid`', () => {
  const category = 'Jiraya'
  
  test('Deberia renderizar correctamente', () => {
    // simulamos la respuesta por defecto.
    useFetchGifs.mockReturnValue({data: [], loading: true});
    const component = shallow(<GifGrid category={category} />);
    expect(component).toMatchSnapshot();
  });
  
  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [{
      id: 'abc',
      url: 'https://google.com',
      title: 'Any message',
    }];
    // simulamos la respuesta con los datos buscado en la api.
    useFetchGifs.mockReturnValue({data: gifs, loading: false});

    const component = shallow(<GifGrid category={category} />);

    expect(component).toMatchSnapshot();
    expect(component.find('p').exists()).toBe(false);
    expect(component.find('GifGridItem').length).toBe(gifs.length);
  });
});
