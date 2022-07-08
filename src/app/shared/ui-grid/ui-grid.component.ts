import { Component, OnInit } from '@angular/core';

class Movie {
  public title!:string;
  public description!:string;
  public url!:string;

}

@Component({
  selector: 'app-ui-grid',
  templateUrl: './ui-grid.component.html',
  styleUrls: ['./ui-grid.component.css']
})
export class UiGridComponent implements OnInit {
  movies: Movie[]=[{title:'hello',description:'we are testing',url:'https://www.youtube.com/embed/aWzlQ2N6qqg'},{title:'hello',description:'we are testing',url:'https://www.youtube.com/embed/aWzlQ2N6qqg'}];

  constructor() { }

  ngOnInit(): void {
  }

}
