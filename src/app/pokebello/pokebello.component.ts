import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-pokebello',
  templateUrl: './pokebello.component.html',
  styleUrls: ['./pokebello.component.css']
})
export class PokebelloComponent implements OnInit {

  public pokedex;
  public toShow: boolean;
  constructor(private service: ServizioService, private infoService: InfoService, private router: Router) {
    this.toShow = false;
  }

  ngOnInit(): void {
    console.log(this.getToShow());
    if(this.getToShow())
      this.getPokemon();
  }

  public getPokemon(): void {
    this.service.getAll().subscribe((data) => { console.log(data); this.pokedex = data });
  }

  public getInfo(url: string): void {
    this.service.getInfo(url).subscribe((data) => { 
      console.log(data); 
      this.infoService.setInfo(data); 
    }).add(() => { this.router.navigate(["pokemod/info"]); });
  }

  public getToShow(): boolean {
    this.toShow = this.infoService.getToShow();
    return this.toShow;
  }

}