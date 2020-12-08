import { getGifs } from './../../helpers/getGifs';

describe('Test on getGifs', () => {

  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('one punch');

    expect(gifs.length).toBe(10);
  });

  test('Debe de traer 0 elementos si no enviamos categorias', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});