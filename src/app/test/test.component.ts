import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() titulo
  @Output()respuesta: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {

  }


  jaja() {
    alert('jaja que tonta la rata flipa con estas cosas');
    console.log(this.titulo);
    this.emite();


  }

  emite() {

let s = 'sssss';

this.respuesta.emit(s);
  }

}
