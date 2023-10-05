import ErrorRepository from '../basic';

test('Объект должен находить код ошибки', () => {
  const code = new ErrorRepository();
  expect(code.translate(1)).toBe('Файл не найден');
});

test('Объект должен находить код ошибки', () => {
  const code = new ErrorRepository();
  expect(code.translate(2)).toBe('Сетевая ошибка');
});

test('Объект должен находить код ошибки', () => {
  const code = new ErrorRepository();
  expect(code.translate(3)).toBe('Файл поврежден');
});

test('Объект не должен находить код ошибки', () => {
  const code = new ErrorRepository();
  expect(code.translate(4)).toBe('Unknown error');
});

test('Объект не должен находить код ошибки', () => {
  const code = new ErrorRepository();
  expect(code.translate('asdds')).toBe('Unknown error');
});