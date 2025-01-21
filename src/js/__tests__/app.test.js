import { orderByProps } from '../app';

test('testing orderByProps function when sortList has existing keys', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const result = orderByProps(obj, ['name', 'level']);
  const expected = [
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'health', value: 10},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
  ];
  expect(result).toEqual(expected);
});

test('testing orderByProps function when sortList does not have existing keys', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const result = orderByProps(obj, ['power', 'attack']);
  const expected = [
    {key: 'attack', value: 80},
    {key: 'name', value: 'мечник'},
    {key: 'health', value: 10},
    {key: 'level', value: 2},  
    {key: 'defence', value: 40},
  ];
  expect(result).toEqual(expected);
});
