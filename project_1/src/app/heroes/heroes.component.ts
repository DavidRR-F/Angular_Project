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

  heroes: Hero[] = [];

  selectedHero?: Hero;
  // inject service and message instance
  constructor(private heroService: HeroService, private messageService: MessageService) { }


  // lifecycle hook: main funtion to fetch data
  ngOnInit(): void {
    this.getHeroes();
  }
  //get values from api
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(x => {
        console.log(x);
        this.heroes = x;
      });
  }

  onSelect(hero: Hero): void{
    this.messageService.add(`You selected hero: ${hero.id}`);
    console.log(hero);
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
