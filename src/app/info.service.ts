import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public data;
  public toShow : boolean = false;

  public setInfo(data): void{
    this.data = data;
  }

  public getInfo(){
    return this.data;
  }

  public setToShow(toShow:boolean): void{
    this.toShow = toShow;
  }

  public getToShow():boolean{
    return this.toShow;
  }

  constructor() { }
}
