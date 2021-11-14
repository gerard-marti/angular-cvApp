import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`
    .about {
      margin: 0;
      text-indent: 2rem;
      text-align: justify;
    }
  `]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
