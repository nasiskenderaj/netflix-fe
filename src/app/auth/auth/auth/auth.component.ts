import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import {GlobalstoreService} from "../../../core/globalstore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showDialog=false;


  constructor(private http: HttpClient, private localstorage:GlobalstoreService,private router:Router){

  }


  ngOnInit() {
  }

  login() {
    this.showDialog=false;
    if (this.localstorage.getItem('user')){
    this.router.navigate(['list']);
    }
    else
   this.showDialog=true;
  }
}
