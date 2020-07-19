import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  test: Array<string> = [];
  dictionary = 'abcdefghijklmnopqrstuvwxyz';

  constructor() { }

  ngOnInit() {

    for (let index = 0; index < 10; index++) {
      this.createRandomWords(this.dictionary);
    }
  }


  createRandomWords(texto: string){
    console.log('loop');

    let randomIndex = Math.random() * 10;
    console.log(randomIndex);
    let newWord = texto.substr(randomIndex, 3);
    this.test.push(newWord);
    console.log(newWord);



  }




}
