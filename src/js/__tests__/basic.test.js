import Team from '../basic';

// add - - - - - - - - - - - - - - - - - - - - - - - -

test('Объект должен создаваться', () => {
  const unit = new Team().add('Bowman');
  expect(unit.size).toBe(1);
});

test('Объект должен создаваться', () => {
  const units = new Team();
  const unit1 = units.add('Daemon');
  const unit2 = unit1.add('Bowman');
  expect(unit2.size).toBe(2);
});

test('Объект не должен создаваться', () => {
  expect(() => new Team().add('Boy')).toThrow();
});

test('Объект не должен создаваться', () => {
  const unit = new Team();
  unit.add('Bowman');
  unit.add('Daemon');
  expect(() => unit.add('Daemon')).toThrow();
});

// addAll - - - - - - - - - - - - - - - - - - - - - - - -

test('Объект должен создаваться', () => {
  const unit = new Team().addAll('Bowman', 'Zombie', 'Daemon');
  expect(unit.size).toBe(3);
});

test('Объект должен создаваться', () => {
  const unit = new Team().addAll('Zombie', 'Bowman', 'Zombie', 'Daemon');
  expect(unit.size).toBe(3);
});

test('Объект должен создаваться', () => {
  const unit = new Team().addAll('Zom', 'Bow', 'Zom', 'Daemon');
  expect(unit.size).toBe(1);
});

// toArray - - - - - - - - - - - - - - - - - - - - - - - -

test('Объект должен создаваться', () => {
  const unit = new Team();
  unit.addAll('Zombie', 'Bowman', 'Zombie', 'Daemon');
  expect(unit.toArray()).toEqual([
    { name: 'Zombie', type: 'Zombie' },
    { name: 'Bowman', type: 'Bowman' },
    { name: 'Daemon', type: 'Daemon' },
  ]);
});