import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  someNumbers: number[];

  buttonOn: boolean;

  testNumber: number;

  constructor(private heroService: HeroService) {} // , private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
    this.buttonOn = false;
    this.someNumbers = [];
  }
    //Death code
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }*/

  getHeroes(): void {
    // getHeroes() return Observable object witch emit an array of Hero objects.
    // then function subscribe catching that object and observe them using heroes observer
    // created by annonymus arrow function invoked as subscribe parameter.
    // Q: does heroe observer and observer emmited by service (getHeroes()) should be same the same type ?
    this.heroService.getHeroes()
        .subscribe(heroes => {

          if (this.heroes === undefined || this.heroes.length === 0   ) {
            this.heroes = heroes;
          }
          else {
            this.heroes =  this.heroes.concat(heroes);
            this.heroes = this.heroes.sort((x, y) => x.id - y.id);
          }
          console.log(this.heroes);
        } );
  }


  getNumber(): void {
    //
    this.buttonOn = true;
    this.heroService.getNumber()
    .subscribe(someNumber => {

                              this.someNumbers.push(someNumber);
                              this.someNumbers = [... new Set(this.someNumbers)];
                              console.log(this.someNumbers);
                              });
  }
}
