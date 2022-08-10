import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static counterInstance = 0;

  constructor(_name:string) {
    super(_name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances() {
    this.counterInstance += 1;
    return this.counterInstance;
  }
  
  set energyType(typeEnergi: EnergyType) {
    this._energyType = typeEnergi;
  }

  get energyType() {
    return this._energyType;
  }
}