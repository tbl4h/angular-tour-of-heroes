import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import {AntyHero} from './anty-hero';
import { Hero } from './hero';
import { HEROES, HEROESv2 } from './mock-heroes';
import {ANTYHEROES} from './mock-anty-heroes';

const someHeroes: Hero[] = [
  {id: 200, name: 'Zenon'},
  {id: 300, name: 'Olaf'}

];

const someOtherHeroes: Hero[] = [
  {id: 400, name: 'Jan' }
];

@Injectable({
  providedIn: 'root'
})
export class HeroService {




  constructor(private messageService: MessageService) { }
  //
  // Conclusion: Type of observable is inferred on the fly.
  // Compiler searching current properties by the name and if they are the same as in template type object,
  // adjust them to equvalent. (It's TS feature).
  //
  getHeroes(): Observable<Hero[] > {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); //  , HEROESv2 , ANTYHEROES);
  }
  // Emit one observavble object contain 4 numbers.
   getNumber(): Observable<number> {
     return of(1, 2, 3, 4);
   }

   getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
