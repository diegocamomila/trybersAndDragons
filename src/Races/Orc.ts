// https://www.tutorialkart.com/typescript/typescript-method-overriding/#:~:text=Method%20Overriding%20is%20a%20process,super%20class%20for%20certain%20tasks.
import Race from './Race';

export default class Orc extends Race {
  static counterInstance = 0;
  // protected _maxLifePoints:number;

  constructor(_name:string, _dexterity:number) {
    super(_name, _dexterity);
    this.maxLifePoints = 74;
  }

  static createdRacesInstances() {
    this.counterInstance += 1;
    return this.counterInstance;
  }
  
  set maxLifePoints(life) {
    this._maxLifePoints = life;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}