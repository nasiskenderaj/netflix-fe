import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import {GlobalstoreService} from "../../../core/globalstore.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showDialog=false;

signInFormGroup!:FormGroup;
  constructor(private http: HttpClient, private localstorage:GlobalstoreService,private router:Router,private formbuilder:FormBuilder){

  }


  ngOnInit() {
    this.signInFormGroup=this.formbuilder.group(
      {
     email:[null,[Validators.required,Validators.email]] ,
     password:[null,Validators.required] ,
      }
    )
  }

  login() {
    this.showDialog=false;
    if (this.localstorage.getItem('email')==this.signInFormGroup?.get('email')?.value && this.localstorage.getItem('user')==this.signInFormGroup?.get('password')?.value){
    this.router.navigate(['list']);
    }
    else
   this.showDialog=true;
  }
}
