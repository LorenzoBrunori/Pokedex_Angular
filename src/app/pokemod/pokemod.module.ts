import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokebelloComponent } from '../pokebello/pokebello.component';
import { InfoComponent } from '../info/info.component'

import { Routes, RouterModule } from '@angular/router';
import {InfoService} from '../info.service';
import {ServizioService} from '../servizio.service';

const routes: Routes = [
  {
    path: "poke",
    component: PokebelloComponent
  },
  {
    path: "info",
    component: InfoComponent
  }
]

@NgModule({
  declarations: [
    PokebelloComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    InfoService,
    ServizioService
  ],
  exports:[
    PokebelloComponent,
    InfoComponent
  ]
})
export class PokeModModule { }
