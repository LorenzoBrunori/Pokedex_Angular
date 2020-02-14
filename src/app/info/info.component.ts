import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public info;
  public onClick: boolean;
  constructor(private infoService: InfoService, private back: Location, private router: Router) {
    this.onClick = false;
  }

  ngOnInit(): void {
    this.info = this.infoService.getInfo();
  }

  public getBack(): void {
    this.router.navigate(["pokemod/poke"]);
  }

  public onClicked(): boolean{
    this.onClick = true;
    this.infoService.setToShow(true);
    return this.onClick;
  }
}
