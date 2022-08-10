import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static counterInstance = 0;

  constructor(_name:string) {
    super(_name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances() {
    this.counterInstance += 1;
    return this.counterInstance;
  }
  
  set energyType(mana: EnergyType) {
    this.energyType = mana;
  }

  get energyType() {
    return this.energyType;
  }
}