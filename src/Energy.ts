// https://blog.logrocket.com/types-vs-interfaces-in-typescript/
export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type:EnergyType;
  amount:number;
}