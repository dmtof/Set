export default class Team {
  constructor() {
    this.members = new Set();
    this.bowman = { name: 'Bowman', type: 'Bowman' };
    this.swordsman = { name: 'Swordsman', type: 'Swordsman' };
    this.magician = { name: 'Magician', type: 'Magician' };
    this.daemon = { name: 'Daemon', type: 'Daemon' };
    this.undead = { name: 'Undead', type: 'Undead' };
    this.zombie = { name: 'Zombie', type: 'Zombie' };
    this.team = [this.bowman, this.swordsman, this.magician, this.daemon, this.undead, this.zombie];
  }

  add(unit) {
    if (typeof unit === 'string' && this.team.find((a) => a.name === unit)) {
      const indexUnit = this.team.findIndex((a) => a.name === unit);
      if (!this.members.has(this.team[indexUnit])) {
        this.members.add(this.team[indexUnit]);
        return this.members;
      }
      throw new Error('Персонаж уже добавлен в команду!');
    } else {
      throw new Error('Персонаж не найден!');
    }
  }

  addAll(...units) {
    units.forEach((arg) => {
      if (typeof arg === 'string' && this.team.find((a) => a.name === arg)) {
        const indexUnit = this.team.findIndex((a) => a.name === arg);
        this.members.add(this.team[indexUnit]);
      }
    });
    return this.members;
  }

  toArray() {
    const result = [];
    for (const unit of this.members) {
      result.push(unit);
    }
    return result;
  }
}