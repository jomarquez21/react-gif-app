import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from './../../components/AddCategory';
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom';

describe('Test on `AddCategory`', () => {
  const setCategories = jest.fn();
  let component = shallow(
    <AddCategory setCategories={setCategories} />
  );

  beforeEach(() => {
    // mocks are cleaned before running test.
    jest.clearAllMocks();
    component = shallow(
      <AddCategory setCategories={setCategories} />
    );
  });

  test('Deberia renderizar correctamente', () => {
    expect(toJson(component)).toMatchSnapshot()
  });

  test('Debe de cambiar el input', () => {
    const input = component.find('input');
    const value = 'hola mundo';
    
    input.simulate('change', {target: {value}});
    const p = component.find('p');
    
    expect(p.text().trim()).toBe(value);
  });

  test('No debe de postear la informacion con submit', () => {
    component.find('form').simulate('submit', {preventDefault(){}});

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe de llamar el `setCategories` y limpear el input', () => {
    const value = 'JoMarquez';
    component.find('input').simulate('change', {target: {value}});

    component.find('form').simulate('submit', {preventDefault(){}});

    expect(component.find('p').text().trim()).toBe('');
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    // validamos que la funcion fue llamada con otra funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
  })
});
