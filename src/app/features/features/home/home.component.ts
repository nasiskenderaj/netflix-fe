import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../../../shared/ui-grid/ui-grid.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url='movieList';

  constructor( private router:Router,private http:HttpClient) {

  }

  ngOnInit(): void {


  }

}
