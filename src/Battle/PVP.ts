import Fighter from '../Fighter/Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player1: Fighter;
  protected _player2: Fighter;
  
  constructor(player1: Fighter, player2:Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  get player1() {
    return this._player1;
  }

  get player2() {
    return this._player2;
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    return super.fight() === 1 ? 1 : -1;
  }
}