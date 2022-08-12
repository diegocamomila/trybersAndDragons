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

  get character1() {
    return this._player1;
  }

  get character2() {
    return this._player2;
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    return super.fight() === 1 ? 1 : -1;
  }
}