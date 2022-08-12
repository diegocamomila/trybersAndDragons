import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player: Fighter;
  protected _enemies: SimpleFighter[];
  
  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      this._player.attack(enemy);
      enemy.attack(this._player);
    });
    return super.fight() === 1 ? 1 : -1;
  }
}