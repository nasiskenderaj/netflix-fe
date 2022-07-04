import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor(private http: HttpClient, private fileSaverService: FileSaverService){

  }


  ngOnInit() {
  }
}
