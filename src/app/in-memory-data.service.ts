import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dal Riata' },
      { id: 2, name: 'Kingdom of Burgundy' },
      { id: 3, name: 'Taifa States' },
      { id: 4, name: 'Kingdom of the lsles' },
      { id: 5, name: 'Kingdom of Majorca' },
      { id: 6, name: 'LLKhanate' },
      { id: 7, name: 'Armenian Kingdom of Cilicia' },
      { id: 8, name: 'Kingdom of Navarre' },
      { id: 9, name: 'Empire of Trebizond' },
      { id: 10, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
