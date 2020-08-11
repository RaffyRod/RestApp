import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  percent : number = 50;
  radius : number = 100;
  fullTime : any = '00:01:30';

  constructor() {}


  startTime(){}

}
