//
import Energy from '../Energy';

export default interface Fighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy | undefined;
  // attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}