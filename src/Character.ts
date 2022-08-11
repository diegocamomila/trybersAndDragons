import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/index';
import Race, { Elf } from './Races';
import getRandomInt from './utils';
import SimpleFighter from './Fighter/SimpleFighter';

export default class Character implements Fighter {
  protected _race:Race;
  protected _archetype:Archetype;
  protected _maxLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;
  protected _defense: number;  
  protected _dexterity: number;
  protected _energy: Energy | undefined;
  protected _name: string;  

  constructor(name:string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };   
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    if (this._energy) {
      return {
        type: this._energy.type,
        amount: this._energy.amount,
      };
    }
    return undefined;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      const life = this._lifePoints - damage;
      this._lifePoints = (life <= 0) ? -1 : life;
    }
    return this._lifePoints; // pelo que eu entendi é para funcionar o set que deixei race/elf
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10); 
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    // this._energy.amount = 10;
    // this._energy = (undefined) || (this._energy.amount = 10);
    if (this._energy) {
      this._energy.amount = 10;
    }
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    // this._lifePoints = this._maxLifePoints;
  }
}