import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.component.html',
  styleUrls: ['./caratula.component.css']
})
export class CaratulaComponent implements OnInit {

elements: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.initTracks(10);
  }


  initTracks(cantidad: number){

    for (let index = 1; index <= cantidad; index++) {
      this.elements.push('Track nº: ' + index);
      
    }

  }
}
