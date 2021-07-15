import Validator from '../app';

test.each(['1karton', 'kart%on', 'karton5', 'kar1234ton'])(
  ('incorrect names'),
  (name) => {
    expect(() => new Validator(name)).toThrowError(new Error('Неверный формат имени'));
  },
);

test.each(['karton', 'kart123on', 'ka1r_to-n'])(
  ('correct names'),
  (name) => {
    const exemplar = new Validator(name);
    expect(() => exemplar.validateUsername().toBe('Корректное имя'));
  },
);
