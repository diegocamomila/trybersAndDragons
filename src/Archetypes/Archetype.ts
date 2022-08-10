import { EnergyType } from '../Energy';

export default abstract class Race {
  protected _name:string;
  protected _special:number;
  protected _cost:number;

  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }
  
  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }
  
  abstract set energyType(EnergyType);
  abstract get energyType():EnergyType;
}