// https://www.tutorialkart.com/typescript/typescript-method-overriding/#:~:text=Method%20Overriding%20is%20a%20process,super%20class%20for%20certain%20tasks.
// public: permite acesso a qualquer código externo a classe.
// protected: permite acesso às classes filhas, mas proíbe a qualquer outro acesso externo.
// private: proíbe qualquer acesso externo à própria classe, inclusive das classes filhas.

export default abstract class Race {
  protected _maxLifePoints = 0;
  protected _name:string;
  protected _dexterity:number;

  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }
  
  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }
  
  abstract set maxLifePoints(life);
  abstract get maxLifePoints():number;
}