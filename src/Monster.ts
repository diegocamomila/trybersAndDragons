import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.lifePoints - attackPoints;
    if (damage > 0) {
      const life = this.lifePoints - damage;
      this._lifePoints = (life <= 0) ? -1 : life;
    }
    return this.lifePoints; 
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}